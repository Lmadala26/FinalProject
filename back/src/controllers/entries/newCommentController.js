import insertCommentModel from "../../models/entries/insertCommentModel.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import newCommentSchema from "../../schemas/entries/newCommentSchema.js";

const newCommentController = async (req, res, next) => {
  try {
    const { title, topic, description } = req.body;

    console.log(title);
    await validateSchemaUtil(newCommentSchema, Object.assign(req.body));

    const commentsId = await insertCommentModel(
      title,
      topic,
      description,
      req.user.id
    );

    console.log(commentsId);

    res.send({
      status: "ok",
      data: {
        entry: {
          id: commentsId,
          title,
          topic,
          description,
          userId: req.user.id,
          createdAt: new Date(),
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export default newCommentController;
