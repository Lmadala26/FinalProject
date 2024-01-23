import selectAllCommentsModel from "../../models/entries/selectAllCommentsModel.js";

const listCommentsController = async (req, res, next) => {
  try {
    const { keyword } = req.query;

    const comments = await selectAllCommentsModel(keyword, req.user?.id);

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

export default listCommentsController;
