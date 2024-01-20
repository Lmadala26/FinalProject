import updateUserRegCodeModel from "../../models/users/updateRecoverPassModel.js";

const validateUserController = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

    // Activamos el usuario.
    const user = await updateUserRegCodeModel(registrationCode);
    console.log(user);
    res.send({
      status: "ok",
      message: "Usuario activado / User activated ",
    });
  } catch (err) {
    next(err);
  }
};

export default validateUserController;
