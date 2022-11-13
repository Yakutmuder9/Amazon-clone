const express = require("express");
const router = express.Router();
// Controllers
const {
  register,
  login,
  loginStatus,
  logout,
  changePassword,
} = require("../controllers/auth");
const  protect  = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/loggedin", loginStatus);  
router.get("/logout", logout);

router.patch("/changepassword", protect, changePassword);

module.exports = router;