const express = require("express");
const { connectToMySql } = require("./database/database");

const app = express();

app.use(express.json());

const port = 8000;
app.set("port", port);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.get("/users", async (req, res) => {
  try {
    const conn = await connectToMySql();
    const [rows, _] = await conn.query("SELECT * FROM users");
    const allUsers = [...rows];
    res.json(allUsers);
  } catch (error) {
    return res.status(400).json({
      error: "An error ocurred while fetching users",
    });
  }
});
