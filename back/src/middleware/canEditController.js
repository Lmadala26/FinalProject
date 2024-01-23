import selectCommentByIdModel from "../models/entries/selectCommentByIdModel.js";
import { unauthorizedUserError } from "../services/errorService.js";

const canEditController = async (req, res, next) => {
  try {
    const { commentsId } = req.params;

    const comments = await selectCommentByIdModel(commentsId);

    if (comments.userId !== req.user.id) {
      unauthorizedUserError();
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default canEditController;
