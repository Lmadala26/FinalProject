import selectCommentByIdModel from "../../models/entries/selectCommentByIdModel.js";

const getCommentController = async (req, res, next) => {
  try {
    const { commentsId } = req.params;

    const comments = await selectCommentByIdModel(commentsId, req.user?.id);

    res.send({
      status: "ok",
      data: {
        comments,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default getCommentController;
