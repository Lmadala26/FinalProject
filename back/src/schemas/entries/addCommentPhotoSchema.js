import joi from "joi";
import imgSchema from "../imgSchema.js";

const addCommentPhotoSchema = joi.object({
  photo: imgSchema.required(),
});

export default addCommentPhotoSchema;
