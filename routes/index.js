const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Are you there!",
    user: "John",
    added: new Date()
  },
  {
    text: "End Month",
    user: "Rose",
    added: new Date()
  }
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { title: "Message Detail", message });
});

module.exports = router;
