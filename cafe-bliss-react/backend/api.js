const express = require("express");

const app = express();

app.use(express.json());

let menu = [
    { id: 1, name: "Cappuccino", price: 150 },
    { id: 2, name: "Veg Burger", price: 180 }
];

app.get("/api/menu", (req, res) => {
    res.json(menu);
});

app.post("/api/menu", (req, res) => {
    const item = {
        id: menu.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    menu.push(item);

    res.status(201).json(item);
});

app.listen(5002, () => {
    console.log("REST API running at http://localhost:5002");
});