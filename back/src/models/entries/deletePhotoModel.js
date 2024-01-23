import getPool from "../../db/getPool.js";

const deletePhotoModel = async (photoId) => {
  const pool = await getPool();

  await pool.query(`DELETE FROM commentsPhotos WHERE id = ?`, [photoId]);
};

export default deletePhotoModel;
