const router = require("express").Router();
const { signup, login } =  require("../controllers/authController");
const { userVerification } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify", userVerification);

module.exports = router;