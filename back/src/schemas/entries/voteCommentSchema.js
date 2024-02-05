import joi from "joi";
import joiErrorMessages from "../joiErrorMessages.js";

const voteCommentSchema = joi.object({
  value: joi.number().integer().max(1).required().messages(joiErrorMessages),
});

export default voteCommentSchema;
