import joi from "joi";
import imgSchema from "../imgSchema.js";

const editUserBackgrImgSchema = joi.object({
  backgroundImg: imgSchema.required(),
});

export default editUserBackgrImgSchema;
