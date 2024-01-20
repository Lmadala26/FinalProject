import updateUserRoleModel from "../../models/users/updateUserRoleModel.js";
import { superuserError } from "../../services/errorService.js";

const changeUserRoleController = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { newRole } = req.body;

    if (req.user.role !== "superuser") {
      superuserError();
    }

    // Actualizar el rol del usuario en la base de datos
    await updateUserRoleModel(userId, newRole);

    res.send({
      status: "ok",
      message: "Rol del usuario actualizado correctamente",
    });
  } catch (err) {
    next(err);
  }
};

export default changeUserRoleController;
