import userBackgroundImgModel from "../../models/users/userBackgroundImgModel.js";
import { savePhotoService } from "../../services/photoService.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import editUserBackgrImgSchema from "../../schemas/users/editUserBackgrImgSchema.js";

const userBackgroundImgController = async (req, res, next) => {
  try {
    if (!req.files || !req.files.backgroundImg) {
      return res
        .status(400)
        .send({ message: "No se encontro el archivo / File not found" });
    }

    const backgroundImgFile = req.files.backgroundImg;

    const fileDataForValidation = {
      name: backgroundImgFile.name,
      mimetype: backgroundImgFile.mimetype,
      size: backgroundImgFile.size,
    };

    await validateSchemaUtil(editUserBackgrImgSchema, {
      backgroundImg: fileDataForValidation,
    });

    const backgroundImgName = await savePhotoService(backgroundImgFile, 100);

    await userBackgroundImgModel(backgroundImgName, req.user.id);

    res.send({
      status: "ok",
      message: "Usuario actualizado / Updated user",
      newURL: backgroundImgName,
    });
  } catch (err) {
    next(err);
  }
};

export default userBackgroundImgController;
