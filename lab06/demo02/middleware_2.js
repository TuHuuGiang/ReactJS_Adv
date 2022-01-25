const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");

const hostname = "localhost";
const port = 3002;

const mw = require('./func.middleware')

app.use(mw.requestInfo, mw.requestTime);

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200).end("<h1>Hello world</h1>");
});

app.post("/product", (req, res) => {
    const data = {
        id: 1,
        name: "MacBook",
        price: 5000,
    };
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(data));
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});