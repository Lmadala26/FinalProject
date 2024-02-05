//Revisar modelo para agregar votos negativos y positivos
import getPool from "../../db/getPool.js";

const selectCommentByIdModel = async (commentsId, userId = "") => {
  const pool = await getPool();

  const [comments] = await pool.query(
    `
                SELECT 
                    C.id,
                    C.title,
                    C.topic, 
                    C.description,
                    C.userId,
                    U.username,
                    BIT_OR(V.userId = ?) AS votedByMe,
                    COUNT(CASE value WHEN 1 THEN 1 ELSE NULL END ) AS likes, COUNT(CASE value WHEN 0 THEN 1 ELSE NULL END ) AS dislikes,
                    C.userId = ? AS owner,
                    C.createdAt
                FROM comments C
                LEFT JOIN votes V ON V.commentsId = C.id
                INNER JOIN users U ON U.id = C.userId
                WHERE C.id = ?
                GROUP BY C.id
                ORDER BY C.createdAt DESC
            `,
    [userId, userId, commentsId]
  );

  const [photos] = await pool.query(
    `SELECT id, name FROM commentsPhotos WHERE commentsId = ?`,
    [commentsId]
  );

  return {
    ...comments[0],
    photos,
  };
};

export default selectCommentByIdModel;
