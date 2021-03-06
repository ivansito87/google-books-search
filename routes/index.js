const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API routes
router.use("/api", apiRoutes);

// if no api routes are hit send the react app.
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
});

//export router
module.exports = router;