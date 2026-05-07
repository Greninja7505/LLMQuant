# LLMQuant

LLMQuant is a web application that provides a chat interface to different large language models. It features a role-based model selection, allowing users to interact with different models based on their assigned role. It also includes an admin dashboard to monitor usage statistics.

## Features

- **Role-Based Model Access**: Different user roles can be configured to use different LLM models.
- **Chat Interface**: A simple and intuitive chat interface for interacting with the LLMs.
- **Chat History**: Chat history is saved in the browser's local storage for each role.
- **Admin Dashboard**: A dashboard to view usage statistics, including total messages, messages per role, and messages per model.
- **Python/Flask Backend**: A simple Python backend using Flask to proxy requests to the Ollama service and record usage data.

## Technologies Used

This project is built with:

- **Frontend**:
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - shadcn-ui
- **Backend**:
  - Python
  - Flask
- **Database**:
  - SQLite

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm
- Python 3 and pip

### Installation

1.  **Clone the repo**
    ```sh
    git clone <YOUR_GIT_URL>
    cd <YOUR_PROJECT_NAME>
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Install Python dependencies**
    ```sh
    pip install -r requirements.txt
    ```
    *(You may need to create a `requirements.txt` file with `Flask` and `Flask-Cors`)*

4.  **Run the backend server**
    ```sh
    python proxy.py
    ```
5.  **Run the frontend development server**
    ```sh
    npm run dev
    ```

The application should now be running on your local machine.

