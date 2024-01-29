import joi from "joi";

import joiErrorMessages from "../joiErrorMessages.js";

const editUserInfoSchema = joi.object({
  username: joi.string().required().messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
});

export default editUserInfoSchema;
