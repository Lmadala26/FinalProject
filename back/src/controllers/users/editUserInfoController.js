import updateUserInfoModel from "../../models/users/updateUserInfoModel.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import editUserInfoSchema from "../../schemas/users/editUserInfoSchema.js";

const editUserInfoController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;

    await validateSchemaUtil(editUserInfoSchema, req.body);

    await updateUserInfoModel(userId, username, email);

    res.send({
      status: "ok",
      message:
        "Usuario actualizado, revisa tu correo electrónico / Updated user, check your email",
    });
  } catch (err) {
    next(err);
  }
};

export default editUserInfoController;
