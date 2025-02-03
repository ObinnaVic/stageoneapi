const express = require("express");

const router = require("./routes/details.router");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/details", router);

app.listen(PORT, () => {
    console.log("listening to port", PORT);
});