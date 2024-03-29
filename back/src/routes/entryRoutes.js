import express from "express";

const router = express.Router();

import {
  newCommentController,
  listCommentsController,
  getCommentController,
  addCommentPhotoController,
  deleteCommentPhotoController,
  voteCommentController,
} from "../controllers/entries/index.js";

import {
  userExistsController,
  authUserController,
  authUserOptionalController,
  commentExistsController,
  canEditController,
} from "../middleware/index.js";

router.post(
  "/comments",
  authUserController,
  userExistsController,
  newCommentController
);

router.get("/comments", listCommentsController);

router.get(
  "/comments/:commentsId",
  authUserOptionalController,
  commentExistsController,
  getCommentController
);

router.post(
  "/comments/:commentsId/photos",
  authUserController,
  userExistsController,
  commentExistsController,
  canEditController,
  addCommentPhotoController
);

router.delete(
  "/comments/:commentsId/photos/:photoId",
  authUserController,
  userExistsController,
  commentExistsController,
  canEditController,
  deleteCommentPhotoController
);

router.post(
  "/comments/:commentsId/votes",
  authUserController,
  userExistsController,
  commentExistsController,
  voteCommentController
);

export default router;
