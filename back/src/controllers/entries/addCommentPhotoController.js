import insertPhotoModel from "../../models/entries/insertPhotoModel.js";
import selectCommentByIdModel from "../../models/entries/selectCommentByIdModel.js";
import { savePhotoService } from "../../services/photoService.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import addCommentPhotoSchema from "../../schemas/entries/addCommentPhotoSchema.js";
import { photoLimitReachedError } from "../../services/errorService.js";

const addCommentPhotoController = async (req, res, next) => {
  try {
    const { commentsId } = req.params;

    await validateSchemaUtil(addCommentPhotoSchema, req.files || {});

    const comments = await selectCommentByIdModel(commentsId);

    if (comments.photos.length > 1) {
      photoLimitReachedError();
    }

    const photoName = await savePhotoService(req.files.photo, 500);

    const photoId = await insertPhotoModel(photoName, commentsId);

    res.send({
      status: "ok",
      data: {
        photo: {
          id: photoId,
          name: photoName,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export default addCommentPhotoController;
