import jwt from "jsonwebtoken";
import { invalidCredentialsError } from "../services/errorService.js";

const authUserControllerOptional = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization) {
      const token = authorization.split(" ")[1];

      let tokenInfo;

      try {
        tokenInfo = jwt.verify(token, process.env.SECRET);
      } catch (err) {
        console.log(err);
        invalidCredentialsError();
      }
      req.user = tokenInfo;
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default authUserControllerOptional;
