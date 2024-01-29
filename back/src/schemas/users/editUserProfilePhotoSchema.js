import joi from "joi";
import imgSchema from "../imgSchema.js";

const editUserProfilePhotoSchema = joi.object({
  profilePhoto: imgSchema.required(),
});

export default editUserProfilePhotoSchema;
