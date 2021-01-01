const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
} = require("../controllers/posts");

const router = express.Router();

// reached at localhost:5000/posts
/*
router.get("/", (req, res) => {
  res.send("THIS WORKS!!!");
});
*/

// structure with controllers
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
