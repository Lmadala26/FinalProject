import { v4 as uuid } from "uuid";
import getPool from "../../db/getPool.js";

const insertVoteModel = async (value, commentsId, userId) => {
  const pool = await getPool();

  await pool.query(
    `INSERT INTO votes(id, value, commentsId, userId) VALUES(?, ?, ?, ?)`,
    [uuid(), value, commentsId, userId]
  );

  const [votesAvg] = await pool.query(
    `SELECT COUNT(CASE value WHEN 1 THEN 1 ELSE NULL END ) AS likes, COUNT(CASE value WHEN 0 THEN 1 ELSE NULL END ) AS dislikes FROM votes WHERE commentsId = ?`,
    [commentsId]
  );

  //return Number(votesAvg[0].avg);
  return {
    likes: votesAvg[0].likes,
    dislikes: votesAvg[0].dislikes,
  };
};

export default insertVoteModel;
