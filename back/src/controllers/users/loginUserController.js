import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import selectUserByEmailModel from "../../models/users/selectUserByEmailModel.js";

import validateSchemaUtil from "../../utils/validateSchemaUtil.js";

import loginUserSchema from "../../schemas/users/loginUserSchema.js";

import {
  invalidCredentialsError,
  pendingActivationError,
} from "../../services/errorService.js";

import { SECRET } from "../../../env.js";

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await validateSchemaUtil(loginUserSchema, req.body);
    const user = await selectUserByEmailModel(email, password);
    let validPass;
    if (user) {
      validPass = await bcrypt.compare(password, user.password);
    }
    if (!user || !validPass) {
      invalidCredentialsError();
    }
    if (!user.active) {
      pendingActivationError();
    }
    const tokenInfo = {
      role: user.role,
      id: user.id,
    };
    const token = jwt.sign(tokenInfo, SECRET, {
      expiresIn: "1d",
    });
    res.send({
      status: "ok",
      data: {
        token,
        id: user.id,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default loginUserController;
