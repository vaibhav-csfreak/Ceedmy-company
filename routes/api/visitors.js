const express = require("express");
const router = express.Router();

const Visitors = require("../../models/Visitors");

router.post("/visitors", (req, res) => {
  Visitors.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      
      return res.status(400).json({ email: "You have already registered" });
    } else {
      const newVisitor = new Visitors({
        Fullname: req.body.Fullname,
        phone: req.body.phone,
        email: req.body.email,
      });
      newVisitor
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    }
  });
});
module.exports = router;
