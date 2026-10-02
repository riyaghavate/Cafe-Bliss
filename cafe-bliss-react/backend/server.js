const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

// Menu Schema
const menuSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number
});

const Menu = mongoose.model("Menu", menuSchema);

// Home route
app.get("/", (req, res) => {
    res.send("Cafe Bliss Backend is Running!");
});

// Get menu
app.get("/api/menu", async (req, res) => {
    try {
        const menu = await Menu.find();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Render provides the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});