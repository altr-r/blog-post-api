# Blog Post API

A simple RESTful API for managing blog posts, built with Node.js and Express.

## Features
- Create, read, update, and delete blog posts
- MongoDB integration for persistent storage
- Modular structure for scalability
- Basic testing setup

## Project Structure
```
blog-post-api/
├── app/
│   ├── app.js         # Express app setup
│   └── routes.js      # Main route definitions
├── db/
│   └── db.js          # Database connection logic
├── models/
│   └── Post.js        # Mongoose model for blog posts
├── routes/
│   └── posts.js       # Blog post route handlers
├── test/
│   └── test.js        # Test cases
├── package.json       # Project metadata and dependencies
├── server.js          # Entry point to start the server
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/altr-r/blog-post-api.git
   cd blog-post-api
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Set up environment variables (if needed).

### Running the Application
Start the server:
```bash
yarn start
# or
npm start
```
The API will be available at `http://localhost:3000` by default.

## API Endpoints

### Posts
- `GET /posts` — List all posts
- `POST /posts/create` — Create a new post (expects `author`, `title`, `description` in body)
- `GET /posts/p/:postId` — Get a single post by its ID
- `GET /posts/a/:author` — List all posts by a specific author

## Testing
Run tests with:
```bash
node test/test.js
```

## License
MIT
