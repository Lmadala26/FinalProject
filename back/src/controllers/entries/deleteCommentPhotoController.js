import selectCommentByIdModel from "../../models/entries/selectCommentByIdModel.js";
import deletePhotoModel from "../../models/entries/deletePhotoModel.js";
import { deletePhotoService } from "../../services/photoService.js";
import { notFoundError } from "../../services/errorService.js";

const deleteCommentPhotoController = async (req, res, next) => {
  try {
    const { commentsId, photoId } = req.params;

    const comments = await selectCommentByIdModel(commentsId);

    const photo = comments.photos.find((photo) => photo.id === photoId);

    if (!photo) {
      notFoundError("foto / photo");
    }

    await deletePhotoService(photo.name);

    await deletePhotoModel(photoId);

    res.send({
      status: "ok",
      message: "Foto eliminada / Photo deleted",
    });
  } catch (err) {
    next(err);
  }
};

export default deleteCommentPhotoController;
