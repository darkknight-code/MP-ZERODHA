const router = require("express").Router();
const { signup, login } =  require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");

router.post("/signup",signup);
router.post("/login",login);
router.get("/verify", userVerification);

module.exports = router;