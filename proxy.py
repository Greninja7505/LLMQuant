from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import requests
import json
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app)

OLLAMA_URL = "http://localhost:11434"

ROLE_MODEL_MAP = {
    "hr": "t2qwen7B:latest",
    "dev": "qwen7B:latest",
    "finance": "tqwen7B:latest",
    "default": "qwen7B:latest"
}

# --- DB setup ---
def init_db():
    conn = sqlite3.connect("usage.db")
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS usage_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT,
            role TEXT,
            model TEXT,
            message_preview TEXT,
            response_length INTEGER
        )
    ''')
    conn.commit()
    conn.close()

def log_usage(role, model, message, response_length):
    conn = sqlite3.connect("usage.db")
    c = conn.cursor()
    c.execute('''
        INSERT INTO usage_logs (timestamp, role, model, message_preview, response_length)
        VALUES (?, ?, ?, ?, ?)
    ''', (
        datetime.now().isoformat(),
        role,
        model,
        message[:100],  # only store first 100 chars, not full message
        response_length
    ))
    conn.commit()
    conn.close()

init_db()

# --- Chat route ---
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")
    role = data.get("role", "default")
    model = ROLE_MODEL_MAP.get(role, ROLE_MODEL_MAP["default"])

    payload = {
        "model": model,
        "messages": [{"role": "user", "content": user_message}],
        "stream": True
    }

    full_response = ""

    def generate():
        nonlocal full_response
        with requests.post(
            f"{OLLAMA_URL}/api/chat",
            json=payload,
            stream=True
        ) as r:
            for line in r.iter_lines():
                if line:
                    decoded = line.decode("utf-8")
                    try:
                        parsed = json.loads(decoded)
                        if parsed.get("message", {}).get("content"):
                            full_response += parsed["message"]["content"]
                    except:
                        pass
                    yield decoded + "\n"
        log_usage(role, model, user_message, len(full_response))

    return Response(generate(), mimetype="text/plain")


# --- Admin stats route ---
@app.route("/admin/stats", methods=["GET"])
def admin_stats():
    conn = sqlite3.connect("usage.db")
    c = conn.cursor()

    # Total messages
    c.execute("SELECT COUNT(*) FROM usage_logs")
    total = c.fetchone()[0]

    # Messages per role
    c.execute("SELECT role, COUNT(*) FROM usage_logs GROUP BY role")
    by_role = dict(c.fetchall())

    # Messages per model
    c.execute("SELECT model, COUNT(*) FROM usage_logs GROUP BY model")
    by_model = dict(c.fetchall())

    # Recent 10 messages
    c.execute("""
        SELECT timestamp, role, model, message_preview 
        FROM usage_logs 
        ORDER BY id DESC 
        LIMIT 10
    """)
    recent = [
        {"timestamp": r[0], "role": r[1], "model": r[2], "preview": r[3]}
        for r in c.fetchall()
    ]

    conn.close()
    return jsonify({
        "total_messages": total,
        "by_role": by_role,
        "by_model": by_model,
        "recent": recent
    })


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(port=5001)