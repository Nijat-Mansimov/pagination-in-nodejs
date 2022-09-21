const router = require("express").Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.getAllBlog);
router.get("/:id", blogController.onlyGetOneBlog);
router.post("/", blogController.searchLetter)

module.exports = router;