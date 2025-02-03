const express = require("express");
const cors = require("cors");
const router = require("./routes/details.router");

const app = express();

const PORT = 5000;

const corsOptions = {
    origin: ["http://localhost:5000", "https://stageoneapi.onrender.com"],
    methods: ["GET"],
    allowedHeaders: ["COntent-Type", "Authorization"],
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/details", router);

app.listen(PORT, () => {
    console.log("listening to port", PORT);
});