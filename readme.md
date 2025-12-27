# jsonwave 🌊  
**Free Mock REST API for Frontend & Mobile Developers**

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live API](https://img.shields.io/website?url=https%3A%2F%2Fjsonwave.onrender.com%2Fapi%2Fv1%2Fposts)](https://jsonwave.onrender.com/api/v1/posts)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-contributing)

---

**jsonwave** is a **free, open-source mock REST API** designed for **frontend developers, mobile app developers, and learners** who need realistic test data for rapid prototyping — **no backend setup required**.

> ⚡ Start building apps instantly with real-world-like API responses.

---

## 🚀 Live API Endpoint

https://jsonwave.onrender.com/api/v1


---

## ✨ Features

- ✅ **Zero Configuration** – Use instantly  
- ✅ **Realistic Mock Data** – Human-readable JSON  
- ✅ **Full CRUD Support** – GET, POST, PUT, PATCH, DELETE  
- ✅ **CORS Enabled** – Works with web & mobile apps  
- ✅ **Always Free** – No signup, no credit card  
- ✅ **No Rate Limits** – Ideal for development & learning  
- ✅ **Production-like Responses** – Real HTTP status codes  

---

## 📚 Available Resources

### 📝 Posts

GET /posts
GET /posts/1
POST /posts
PUT /posts/1
PATCH /posts/1
DELETE /posts/1


### 👤 Users

GET /users
GET /users/1
POST /users
PUT /users/1
PATCH /users/1
DELETE /users/1


### 💬 Comments

GET /comments
GET /comments/1
POST /comments
PUT /comments/1
PATCH /comments/1
DELETE /comments/1


---

## 🎯 Quick Start

### 1️⃣ Basic GET Request
```js
// Fetch all posts
fetch('https://jsonwave.onrender.com/api/v1/posts')
  .then(res => res.json())
  .then(data => console.log(data));

// Fetch single post
fetch('https://jsonwave.onrender.com/api/v1/posts/1')
  .then(res => res.json())
  .then(data => console.log(data));
```


### 2️⃣ Create New Resource (POST)
```js
fetch('https://jsonwave.onrender.com/api/v1/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is a new post created via API',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log('Created:', data));
```

### 3️⃣ Update Resource (PUT / PATCH)
```js
// Full update
fetch('https://jsonwave.onrender.com/api/v1/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Updated Title',
    body: 'Updated content',
    userId: 1
  })
});

// Partial update
fetch('https://jsonwave.onrender.com/api/v1/posts/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'New Title Only' })
});
```

### 4️⃣ Delete Resource
```js
fetch('https://jsonwave.onrender.com/api/v1/posts/1', {
  method: 'DELETE'
})
.then(res => {
  if (res.ok) console.log('Post deleted successfully');
});
```

🔍 Advanced Usage

Query Parameters

// Filter by user
/posts?userId=1

// Pagination
/posts?_page=2&_limit=5

// Sorting
/posts?_sort=title&_order=asc


Nested Routes

/users/1/posts
/posts/1/comments



💡 Example Response

{
  "id": 1,
  "title": "Understanding REST APIs",
  "body": "REST APIs are essential for modern web development...",
  "userId": 1,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}


🛠️ Project Structure


jsonwave/
├── src/
│   ├── data/
│   │   ├── posts.json
│   │   ├── users.json
│   │   └── comments.json
│   ├── routes/
│   │   ├── posts.js
│   │   ├── users.js
│   │   └── comments.js
│   └── app.js
├── package.json
├── README.md
└── .env.example




🚀 Local Development


git clone https://github.com/yourusername/jsonwave.git
cd jsonwave
npm install
cp .env.example .env
npm run dev


Server runs at:

http://localhost:3000


⚠️ Important Notes
❗ Development Use Only

No production usage

No sensitive data

No authentication

🔄 Data Persistence

In-memory storage

Resets on restart

Fresh data on each deployment

🚦 Performance

Free tier (Render)

Cold start: 10–30s

No SLA guarantee

🔧 Tech Stack

Node.js + Express

JSON-based in-memory storage

CORS enabled

Hosted on Render



📄 License

MIT License © jsonwave



🌟 Support the Project

⭐ Star the repo

🐞 Report issues

📢 Share with dev friends


🔗 Links

Live API: https://jsonwave.onrender.com/api/v1/posts

Source Code: https://github.com/yourusername/jsonwave


“Simplicity is the ultimate sophistication.” — Leonardo da Vinci


Made with ❤️ for the developer community