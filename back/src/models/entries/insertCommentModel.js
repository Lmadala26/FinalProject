import { v4 as uuid } from "uuid";

import getPool from "../../db/getPool.js";

const insertCommentModel = async (title, topic, description, userId) => {
  const pool = await getPool();

  const commentsId = uuid();

  await pool.query(
    `INSERT INTO comments(id, title, topic, description, userId) VALUES(?, ?, ?, ?, ?)`,
    [commentsId, title, topic, description, userId]
  );
  console.log(commentsId);

  return commentsId;
};

export default insertCommentModel;
