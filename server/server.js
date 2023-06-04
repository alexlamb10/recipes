const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "../public")));
const port = 3000;

let { getList, getTodoById } = require("./controller");

app.get("/", getList);
app.get("/getTodoById/:id", getTodoById);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
