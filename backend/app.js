const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });
const express = require("express");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./server");
const { expressLogger, logger } = require("./utils/logger");

const usersRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();
app.use(expressLogger);

(async () => await connectDB())();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const events = [
  {
    event: "error",
    action: (err) => {
      if (err) {
        return res.status(400).json({
          status: "Fail",
          message: "There was an error parsing the files",
          error: err,
        });
      }
    },
  },
];
app.use(formidableMiddleware(events));

app.use("/api/users", usersRouter);
app.use("/api", productRouter);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.all("/*", (req, res, next) => {
  next(new Error("Resource unavailable"));
});

app.use((err, req, res, next) => {
  res.status(400).send({
    success: false,
    message: err.message.toLowerCase().includes("duplicate key")
      ? "Account already exists"
      : err.message,
  });
});

process.on("unhandledRejection", (err) => {
  logger.warn(err);
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  logger.warn(err);
  process.exit(1);
});

app.listen(PORT, (err) => {
  logger.info(err || `Listening on ${PORT}`);
});

module.exports = app;
