import getPool from "../../db/getPool.js";

const userBackgroundImgModel = async (backgroundImgName, userId) => {
  const pool = await getPool();

  await pool.query(`UPDATE users SET backgroundImg = ? WHERE id = ?`, [
    backgroundImgName,
    userId,
  ]);
};

export default userBackgroundImgModel;
