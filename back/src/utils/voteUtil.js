import getPool from "../db/getPool.js";

const hasUserVoted = async (commentsId, userId) => {
  const pool = await getPool();

  const [result] = await pool.query(
    `SELECT COUNT(*) AS count FROM votes WHERE commentsId = ? AND userId = ?`,
    [commentsId, userId]
  );

  return result[0].count > 0;
};

export default hasUserVoted;
