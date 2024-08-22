const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const userRoutes = require("./userRoutes");
router.use("/user", userRoutes);

module.exports = router;