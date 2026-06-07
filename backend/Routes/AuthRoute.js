const router = require("express").Router();
const { signup, login } =  require("../Controllers/authController");
const { userVerification } = require("../Middleware/authMiddleware");

router.post("/signup",signup);
router.post("/login",login);
router.get("/verify", userVerification);

module.exports = router;