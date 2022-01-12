const auth = require("../middlewares/auth-middleware")
const checkPermission = require("../middlewares/check-permission");
const { checkRole } = require("../middlewares/check-role");
const { Comment } = require("../models");
const CommentController = require("./../controllers/comment-controller");
const router = require("express").Router();

router.post("/create", auth, CommentController.create);
router.delete(
  "/:id",
  auth,
  checkRole("ADMIN", "USER"),
  checkPermission(Comment),
  CommentController.deleteOne
);
router.get("/:id", CommentController.getAll);
router.get("/get/:id", CommentController.getOne);
router.patch("/:id", auth,
checkRole("ADMIN", "USER"),
checkPermission(Comment),CommentController.update);


module.exports = router;