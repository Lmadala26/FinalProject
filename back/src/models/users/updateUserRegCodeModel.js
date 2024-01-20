import getPool from "../../db/getPool.js";

import { notFoundError } from "../../services/errorService.js";

const updateUserRegCodeModel = async (registrationCode) => {
  const pool = await getPool();

  const [users] = await pool.query(
    `SELECT id FROM users WHERE registrationCode = ?`,
    [registrationCode]
  );

  if (users.length < 1) {
    notFoundError("Usuario no encontrado / User not found");
  }

  await pool.query(
    `UPDATE users SET active = true, registrationCode = null WHERE registrationCode = ?`,
    [registrationCode]
  );
};

export default updateUserRegCodeModel;
