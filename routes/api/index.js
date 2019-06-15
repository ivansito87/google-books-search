const path = require("path");
const router = require("express").Router();
const bookRoutes = require("/books");
const googleRoutes = require("./google");

// Routes for the books
router.use("/books", bookRoutes);

// Routes for Google
router.use("/google", googleRoutes);

// If not specified render the home page
router.use((req, res) => {
   res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

// We export router