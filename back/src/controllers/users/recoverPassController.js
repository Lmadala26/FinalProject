import randomstring from "randomstring";
import selectUserByEmailModel from "../../models/users/selectUserByEmailModel.js";
import updateRecoverPassModel from "../../models/users/updateRecoverPassModel.js";
import { notFoundError } from "../../services/errorService.js";

const recoverPassController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await selectUserByEmailModel(email);
    if (!user) {
      notFoundError("Usuario no encontrado / User not found");
    }
    const recoverPassCode = randomstring.generate(10);

    await updateRecoverPassModel(email, recoverPassCode);
    res.send({
      status: "ok",
      message:
        "Correo de recuperación de contraseña enviado / Password recovery email sent",
    });
  } catch (err) {
    next(err);
  }
};

export default recoverPassController;
