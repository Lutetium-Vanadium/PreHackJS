import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const __dirname = path.resolve();
const staticFolder = path.resolve(__dirname, "static");

app.use(express.static("static"));

app.get("/", (req, res) => res.sendFile("index.html", { root: staticFolder }));

// app.get("/static/*", (req, res) => console.log({ req, res }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
