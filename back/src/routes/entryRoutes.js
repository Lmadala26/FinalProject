import express from "express";

const router = express.Router();

import {
  newCommentController,
  listCommentsController,
  getCommentController,
  addCommentPhotoController,
  deleteCommentPhotoController,
  positiveVoteCommentController,
  negativeVoteCommentController,
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

router.get("/comments", authUserOptionalController, listCommentsController);

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
  "/comments/:commentsId/positivevotes",
  authUserController,
  userExistsController,
  commentExistsController,
  positiveVoteCommentController
);

router.post(
  "/comments/:commentsId/negativevotes",
  authUserController,
  userExistsController,
  commentExistsController,
  negativeVoteCommentController
);

export default router;
