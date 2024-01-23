import { v4 as uuid } from "uuid";
import getPool from "../../db/getPool.js";
import { voteAlreadyExistsError } from "../../services/errorService.js";

const insertPositiveVoteModel = async (value, commentsId, userId) => {
  const pool = await getPool();

  const [positiveVotes] = await pool.query(
    `SELECT id FROM positiveVotes WHERE userId = ? AND commentsId = ?`,
    [userId, commentsId]
  );

  if (positiveVotes.length > 0) {
    voteAlreadyExistsError();
  }

  await pool.query(
    `INSERT INTO positiveVotes(id, value, commentsId, userId) VALUES(?, ?, ?, ?)`,
    [uuid(), value, commentsId, userId]
  );

  const [positiveVotesAvg] = await pool.query(
    `SELECT AVG(value) AS avg FROM positiveVotes WHERE commentsId = ?`,
    [commentsId]
  );

  return Number(positiveVotesAvg[0].avg);
};

export default insertPositiveVoteModel;
