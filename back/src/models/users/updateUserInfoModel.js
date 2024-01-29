import getPool from "../../db/getPool.js";
import emailUtil from "../../utils/emailUtil.js";

const updateUserInfoModel = async (userId, username, email) => {
  const pool = await getPool();

  const emailSubject = "Actualizacion completada / Update completed - Tellit";

  const emailBody = `
    ¡${username}!
    Su usuario ha sido actualizado con exito! / Your user has been successfully updated!
  `;

  await emailUtil(email, emailSubject, emailBody);

  await pool.query(`UPDATE users SET username = ?, email = ? WHERE id = ?`, [
    username,
    email,
    userId,
  ]);
};

export default updateUserInfoModel;
