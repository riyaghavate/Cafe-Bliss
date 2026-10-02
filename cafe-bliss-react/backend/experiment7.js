const http = require("http");
const fs = require("fs");
const { Readable } = require("stream");
const EventEmitter = require("events");

// 1. File System
fs.writeFileSync("cafe.txt", "Welcome to Cafe Bliss!");
console.log("File created successfully.");

// 2. Buffer
const buffer = Buffer.from("Cafe Bliss");
console.log("Buffer:", buffer.toString());

// 3. Stream
const stream = Readable.from(["Coffee ", "Food ", "and ", "Happy Moments!"]);
stream.on("data", (chunk) => {
    console.log("Stream:", chunk.toString());
});

// 4. Event Loop
setTimeout(() => {
    console.log("Event Loop: Timer executed");
}, 1000);

// 5. Events
const event = new EventEmitter();

event.on("welcome", () => {
    console.log("Event: Welcome to Cafe Bliss!");
});

event.emit("welcome");

// 6. HTTP Server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Cafe Bliss Node.js Server</h1><p>Experiment 7 Successful!</p>");
});

server.listen(5001, () => {
    console.log("HTTP Server running at http://localhost:5001");
});