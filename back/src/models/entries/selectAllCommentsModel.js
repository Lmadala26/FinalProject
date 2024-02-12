import getPool from "../../db/getPool.js";

const selectAllCommentsModel = async (keyword = "", userId = "") => {
  const pool = await getPool();

  const [comments] = await pool.query(
    `
                SELECT 
                    C.id,
                    C.title,
                    C.topic, 
                    C.description,
                    C.userId = ? AS owner,
                    C.createdAt
                FROM comments C
            `,
    [userId, userId, `%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
  );

  return comments;
};

export default selectAllCommentsModel;
