import joi from "joi";

import joiErrorMessages from "../joiErrorMessages.js";

const newCommentSchema = joi.object({
  title: joi.string().min(5).max(50).required().messages(joiErrorMessages),
  topic: joi.string().required().messages(joiErrorMessages),
  description: joi
    .string()
    .min(10)
    .max(500)
    .required()
    .messages(joiErrorMessages),
});

export default newCommentSchema;
