//probando un nuevo controlador para votos + funcion util
import selectCommentByIdModel from "../../models/entries/selectCommentByIdModel.js";
import insertVoteModel from "../../models/entries/insertVoteModel.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import hasUserVoted from "../../utils/voteUtil.js";
import VoteCommentSchema from "../../schemas/entries/voteCommentSchema.js";
import {
  cannotVoteOwnCommentError,
  voteAlreadyExistsError,
} from "../../services/errorService.js";

const voteCommentController = async (req, res, next) => {
  try {
    const { commentsId } = req.params;
    const { value } = req.body;

    await validateSchemaUtil(VoteCommentSchema, req.body);

    const comments = await selectCommentByIdModel(commentsId);

    if (comments.userId === req.user.id) {
      cannotVoteOwnCommentError();
    }

    const hasVoted = await hasUserVoted(commentsId, req.user.id);

    if (hasVoted) {
      voteAlreadyExistsError();
    }

    const votesAvg = await insertVoteModel(value, commentsId, req.user.id);

    res.send({
      status: "ok",
      data: {
        votesAvg,
      },
    });
  } catch (err) {
    next(err);
  }
};

const positiveVoteCommentController = async (req, res, next) => {
  await voteCommentController(req, res, next, true);
};

const negativeVoteCommentController = async (req, res, next) => {
  await voteCommentController(req, res, next, false);
};

export default voteCommentController;
