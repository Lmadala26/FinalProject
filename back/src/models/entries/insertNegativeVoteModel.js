import { v4 as uuid } from "uuid";
import getPool from "../../db/getPool.js";
import { voteAlreadyExistsError } from "../../services/errorService.js";

const insertNegativeVoteModel = async (value, commentsId, userId) => {
  const pool = await getPool();

  const [negativeVotes] = await pool.query(
    `SELECT id FROM negativeVotes WHERE userId = ? AND commentsId = ?`,
    [userId, commentsId]
  );

  if (negativeVotes.length > 0) {
    voteAlreadyExistsError();
  }

  await pool.query(
    `INSERT INTO negativeVotes(id, value, commentsId, userId) VALUES(?, ?, ?, ?)`,
    [uuid(), value, commentsId, userId]
  );

  const [negativeVotesAvg] = await pool.query(
    `SELECT AVG(value) AS avg FROM negativeVotes WHERE commentsId = ?`,
    [commentsId]
  );

  return Number(negativeVotesAvg[0].avg);
};

export default insertNegativeVoteModel;
