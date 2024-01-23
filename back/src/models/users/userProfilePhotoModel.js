import getPool from "../../db/getPool.js";

const userProfilePhotoModel = async (profilePhotoName, userId) => {
  const pool = await getPool();

  await pool.query(`UPDATE users SET profilePhoto = ? WHERE id = ?`, [
    profilePhotoName,
    userId,
  ]);
};

export default userProfilePhotoModel;
