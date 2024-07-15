export const posts = [
    {
      id: 1,
      profileImage: "/Profile.png",
      username: "shady",
      date: "05-01-2024",
      text: "How to Implement a Simple Login System in Python\nHey everyone! I'm working on a project where I need to implement a simple login system using Python. I thought I'd share the code here and see if anyone has suggestions for improvements or best practices. Below is the code snippet I've written so far. Any feedback is appreciated!",
      code: `# Simple Login System in Python\n\n# Sample user database\nusers = {\n  "john_doe": "password123",\n  "jane_smith": "securepass456"\n}\n\ndef login(username, password):\n  # Check if the username exists in the user`,
      hashtags: ["#python", "#login", "#dev"],
      likes: 1134,
      comments: 526,
      shares: 145,
    },
    {
        id: 2,
        profileImage: "/Profile1.png",
        username: "devops",
        date: "10-07-2022",
        text: "Hi all, I'm developing a simple To-Do list application using vanilla JavaScript. Below is a basic implementation that allows users to add and remove tasks. Let me know if you have any suggestions to improve the code!",
        code: `// To-Do List App in JavaScript
        document.getElementById('addBtn').addEventListener('click', function() {
            let task = document.getElementById('taskInput').value;
            if (task) {
                let listItem = document.createElement('li');
                listItem.textContent = task;
                document.getElementById('taskList').appendChild(listItem);
                document.getElementById('taskInput').value = '';
            }
        });

        document.getElementById('taskList').addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                e.target.remove();
            }
        });
        `,
        hashtags: ["#python", "#login", "#dev"],
        likes: 7423,
        comments: 5153,
        shares: 425,
      },
      {
        id: 3,
        profileImage: "/Profile2.png",
        username: "webdev",
        date: "25-03-2024",
        text: "Hello everyone! I've been working on a RESTful API using Node.js and Express. The code below demonstrates how to set up basic routes and handle GET and POST requests. Feedback and suggestions are welcome!",
        code: `// RESTful API with Node.js and Express
        const express = require('express');
        const app = express();
        const port = 3000;

        app.use(express.json());

        let items = [];

        app.get('/items', (req, res) => {
            res.json(items);
        });

        app.post('/items', (req, res) => {
            const newItem = req.body;
            items.push(newItem);
            res.status(201).json(newItem);
        });
        });
        `,
        hashtags: ["#python", "#login", "#dev"],
        likes: 4515,
        comments: 1224,
        shares: 1778,
      },
      {
        id: 4,
        profileImage: "/Profile3.png",
        username: "coderdev",
        date: "02-09-2024",
        text: "Hi everyone, I'm currently designing a responsive navigation bar using CSS. The snippet below shows the CSS styles for creating a flexible and visually appealing navbar. Any tips for improvement are appreciated!",
        code: `/* Responsive Navigation Bar CSS */
        body {
            font-family: Arial, sans-serif;
        }

        .navbar {
            overflow: hidden;
            background-color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 20px;
        }

        .navbar a {
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }

        .navbar a.active {
            background-color: #4CAF50;
            color: white;
        }
        `,
        hashtags: ["#python", "#login", "#dev"],
        likes: 77,
        comments: 56,
        shares: 13,
      },
      {
        id: 5,
        profileImage: "/Profile4.png",
        username: "jack02",
        date: "22-10-2024",
        text: "How to Implement a Simple Login System in Python\nHey everyone! I'm working on a project where I need to implement a simple login system using Python. I thought I'd share the code here and see if anyone has suggestions for improvements or best practices. Below is the code snippet I've written so far. Any feedback is appreciated!",
        code: `# Simple Login System in Python\n\n# Sample user database\nusers = {\n  "john_doe": "password123",\n  "jane_smith": "securepass456"\n}\n\ndef login(username, password):\n  # Check if the username exists in the user`,
        hashtags: ["#python", "#login", "#dev"],
        likes: 534,
        comments: 132,
        shares: 88,
      },
      {
        id: 6,
        profileImage: "/Profile5.png",
        username: "james",
        date: "05-01-2024",
        text: "How to Implement a Simple Login System in Python\nHey everyone! I'm working on a project where I need to implement a simple login system using Python. I thought I'd share the code here and see if anyone has suggestions for improvements or best practices. Below is the code snippet I've written so far. Any feedback is appreciated!",
        code: `# Simple Login System in Python\n\n# Sample user database\nusers = {\n  "john_doe": "password123",\n  "jane_smith": "securepass456"\n}\n\ndef login(username, password):\n  # Check if the username exists in the user`,
        hashtags: ["#python", "#login", "#dev"],
        likes: 789,
        comments: 25,
        shares: 42,
      },
      {
        id: 7,
        profileImage: "/Profile6.png",
        username: "andrew",
        date: "04-12-2024",
        text: "How to Implement a Simple Login System in Python\nHey everyone! I'm working on a project where I need to implement a simple login system using Python. I thought I'd share the code here and see if anyone has suggestions for improvements or best practices. Below is the code snippet I've written so far. Any feedback is appreciated!",
        code: `# Simple Login System in Python\n\n# Sample user database\nusers = {\n  "john_doe": "password123",\n  "jane_smith": "securepass456"\n}\n\ndef login(username, password):\n  # Check if the username exists in the user`,
        hashtags: ["#python", "#login", "#dev"],
        likes: 2,
        comments: 1,
        shares: 0,
      },
  ];
  