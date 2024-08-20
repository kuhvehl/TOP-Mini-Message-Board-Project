const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function addMessage(req, res) {
  const { user_name, message } = req.body;
  try {
    await db.insertMessage(user_name, message);
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting message:", error);
    res.status(500).send("Internal Server Error");
  }
}

function renderForm(req, res) {
  res.render("form");
}

module.exports = {
  getMessages,
  addMessage,
  renderForm,
};

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];
