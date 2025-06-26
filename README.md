# 🧠 Quiz Game Web App

An interactive quiz application built with **Node.js**, **Express**, and **EJS**. It renders questions from a local JSON file and provides dynamic views for correct, incorrect, and completion feedback.

## 🚀 Features

- Renders one question at a time from a JSON dataset
- Supports multiple-choice questions
- Provides feedback for correct and incorrect answers
- Option to go to next question or quit
- Tracks quiz progress across requests using a simple server-side variable

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Data**: Local `data.json` file

## 📁 Project Structure

quiz-game-nodejs/
├── data.json # Quiz data source
├── index.js # Server and routing logic
├── package.json # Project metadata
├── views/ # EJS templates (home, quiz, correct, incorrect, completed, quit)
└── public/ # (Optional) Static files like CSS or images


## 🧱 Sample Question Structure (data.json)

```json
{
  "1": {
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
  },
  ...
}

🧪 Getting Started

📋 Prerequisites
Node.js v18+
npm

⚙️ Installation
1.Clone the repo
git clone https://github.com/yourusername/quiz-game-nodejs.git
cd quiz-game-nodejs

2.Install dependencies
npm install

3.Start the server
node index.js

4.Open your browser at:
http://localhost:8080/home

🔌 Routes
| Route    | Description                        |
| -------- | ---------------------------------- |
| `/home`  | Welcome screen                     |
| `/quiz`  | Loads current question             |
| `/check` | POST route to validate user answer |
| `/next`  | Moves to next question             |
| `/back`  | Reloads the current question       |
| `/quit`  | Ends quiz and shows quit page      |

📦 Dependencies
Installed via package.json:
npm install express ejs method-override
| Package           | Description                         |
| ----------------- | ----------------------------------- |
| `express`         | Web server framework                |
| `ejs`             | Templating engine for HTML views    |
| `method-override` | Allows PUT/DELETE via POST in forms |

