import userProfilePhotoModel from "../../models/users/userProfilePhotoModel.js";

import { savePhotoService } from "../../services/photoService.js";

import validateSchemaUtil from "../../utils/validateSchemaUtil.js";

import editUserProfilePhotoSchema from "../../schemas/users/editUserProfilePhotoSchema.js";

const userProfilePhotoController = async (req, res, next) => {
  try {
    if (!req.files || !req.files.profilePhoto) {
      return res
        .status(400)
        .send({ message: "No se encontro el archivo / File not found" });
    }

    const profilePhotoFile = req.files.profilePhoto;

    const fileDataForValidation = {
      name: profilePhotoFile.name,
      mimetype: profilePhotoFile.mimetype,
      size: profilePhotoFile.size,
    };

    await validateSchemaUtil(editUserProfilePhotoSchema, {
      profilePhoto: fileDataForValidation,
    });

    const profilePhotoFileName = await savePhotoService(profilePhotoFile, 100);

    await userProfilePhotoModel(profilePhotoFileName, req.user.id);

    res.send({
      status: "ok",
      message: "Usuario actualizado / Updated user",
    });
  } catch (err) {
    next(err);
  }
};

export default userProfilePhotoController;
