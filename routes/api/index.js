const router = require("express").Router();
const userRoutes = require("./userRoute");
const thoughtRoutes = require("./thoughtRoute");

router.use("/user", userRoute);
router.use("/thought", thoughtRoute);

module.exports = router;