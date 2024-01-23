import selectCommentByIdModel from "../../models/entries/selectCommentByIdModel.js";
import insertPositiveVoteModel from "../../models/entries/insertPositiveVoteModel.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import VoteCommentSchema from "../../schemas/entries/voteCommentSchema.js";
import { cannotVoteOwnCommentError } from "../../services/errorService.js";

const positiveVoteCommentController = async (req, res, next) => {
  try {
    const { commentsId } = req.params;
    const { value } = req.body;

    await validateSchemaUtil(VoteCommentSchema, req.body);

    const comments = await selectCommentByIdModel(commentsId);

    if (comments.userId === req.user.id) {
      cannotVoteOwnCommentError();
    }

    const positiveVotesAvg = await insertPositiveVoteModel(
      value,
      commentsId,
      req.user.id
    );

    res.send({
      status: "ok",
      data: {
        positiveVotesAvg,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default positiveVoteCommentController;
