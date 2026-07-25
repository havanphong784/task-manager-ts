import express from "express";
import router from "./api/v1/routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/v1",router);

app.listen(port, () => {
    console.log("Listening on port " + port);
})