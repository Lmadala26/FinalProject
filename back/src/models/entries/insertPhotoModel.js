import { v4 as uuid } from "uuid";
import getPool from "../../db/getPool.js";

const insertPhotoModel = async (photoName, commentsId) => {
  const pool = await getPool();

  const photoId = uuid();

  await pool.query(
    `INSERT INTO commentsPhotos(id, name, commentsId) VALUES(?, ?, ?)`,
    [photoId, photoName, commentsId]
  );
  return photoId;
};

export default insertPhotoModel;
