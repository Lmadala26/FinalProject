import updateUserRegCodeModel from "../../models/users/updateUserRegCodeModel.js";

const validateUserController = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

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
