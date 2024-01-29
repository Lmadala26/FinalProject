import randomstring from "randomstring";
import insertUserModel from "../../models/users/insertUserModel.js";
import validateSchemaUtil from "../../utils/validateSchemaUtil.js";
import newUserSchema from "../../schemas/users/newUserSchema.js";

const newUserController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    await validateSchemaUtil(newUserSchema, req.body);

    const registrationCode = randomstring.generate(30);

    await insertUserModel(username, email, password, registrationCode);
    res.send({
      status: "ok",
      message:
        "Usuario creado, revisa tu correo electrónico / User created, check your email",
    });
  } catch (err) {
    next(err);
  }
};

export default newUserController;
