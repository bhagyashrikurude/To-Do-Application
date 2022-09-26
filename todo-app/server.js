const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = require("http").createServer();
const todoRoutes = require("./routes/todo-routes");

const app = express();
const port = process.env.PORT || 3200;

app.use(json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB..!");
  })
  .catch((err) => {
    console.log("Error connecting to DB..!", err);
  });

app.use("/api", todoRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
