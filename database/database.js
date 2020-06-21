const mysql = require("mysql2/promise");

const connectToMySql = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "mysql_api",
    });
    return connection;
  } catch (err) {
    throw new Error("Couldn't connect to MySQL");
  }
};

module.exports = {
  connectToMySql,
};
