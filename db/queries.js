const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY timestamp DESC"
  );
  return rows;
}

async function insertMessage(user_name, message) {
  await pool.query(
    "INSERT INTO messages (user_name, message) VALUES ($1, $2)",
    [user_name, message]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
