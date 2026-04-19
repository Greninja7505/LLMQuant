# proxy.py
from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)  # allows your React app to call this

OLLAMA_URL = "http://localhost:11434"

# Role to model mapping - later this gets fetched from your server
ROLE_MODEL_MAP = {
    "hr": "t2qwen7B:latest",
    "dev": "qwen7B:latest",
    "finance": "tqwen7B:latest",
    "default": "qwen7B:latest"
}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")
    role = data.get("role", "default")

    model = ROLE_MODEL_MAP.get(role, ROLE_MODEL_MAP["default"])

    payload = {
        "model": model,
        "messages": [
            {"role": "user", "content": user_message}
        ],
        "stream": True
    }

    def generate():
        with requests.post(
            f"{OLLAMA_URL}/api/chat",
            json=payload,
            stream=True
        ) as r:
            for line in r.iter_lines():
                if line:
                    yield line.decode("utf-8") + "\n"

    return Response(generate(), mimetype="text/plain")


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(port=5001)