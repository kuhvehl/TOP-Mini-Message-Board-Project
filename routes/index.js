const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find((msg, index) => index === messageId);

  if (message) {
    res.render("message", { title: "Message Details", message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

router.post("/new", (req, res) => {
  const newMessage = {
    user: req.body.user,
    text: req.body.message,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
});

module.exports = router;
