const express = require("express");
const messageControllers = require('./../controllers/messageControllers')
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.get(
  "/getMessages",
  authControllers.protect,
  messageControllers.getMessages
);

router.post(
  "/sendMessage",
  authControllers.protect,
  messageControllers.sendMessage
);

// router.delete(
//   "/deleteMessage",
//   authControllers.protect,
//   messageControllers.deleteMessage
// );

module.exports = router;