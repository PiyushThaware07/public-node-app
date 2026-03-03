const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Index Route");
});

// Fetch users from external API and return
app.get("/api/users", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users data" });
    }
});

// Fetch posts from external API and return
app.get("/api/posts", async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts data" });
    }
});

// Fetch products from Fake Store API
app.get("/api/products", async (req, res) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products data" });
    }
});

// Fetch carts from Fake Store API
app.get("/api/carts", async (req, res) => {
    try {
        const response = await fetch("https://fakestoreapi.com/carts");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch carts data" });
    }
});

// Start Server
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
