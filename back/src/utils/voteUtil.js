import getPool from "../db/getPool.js";

const hasUserVoted = async (commentsId, userId, PoNvote) => {
  const pool = await getPool();

  const tableName = PoNvote ? "positiveVotes" : "negativeVotes";

  const [result] = await pool.query(
    `SELECT COUNT(*) AS count FROM ${tableName} WHERE commentsId = ? AND userId = ?`,
    [commentsId, userId]
  );

  return result[0].count > 0;
};

export default hasUserVoted;
