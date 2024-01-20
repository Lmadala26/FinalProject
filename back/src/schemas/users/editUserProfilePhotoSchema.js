import joi from "joi";

import imgSchema from "../imgSchema.js";

const editUserProfilePhotoSchema = joi.object({
  avatar: imgSchema.required(),
});

export default editUserProfilePhotoSchema;
