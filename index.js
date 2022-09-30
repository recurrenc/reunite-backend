import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import CreateDatabaseConnection from "./config/connectdb.js";

const app = express();
const port = process.env.PORT || 5000;
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//     allowedHeaders: ["Authorization", "Content-Type"],
//     credentials: true,
//   })
// );
CreateDatabaseConnection();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
