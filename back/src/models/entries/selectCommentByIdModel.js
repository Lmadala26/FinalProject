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
                    BIT_OR(P.userId = ? OR N.userId = ?) AS votedByMe, 
                    C.userId = ? AS owner,
                    AVG(IFNULL(P.value, 0)) AS positiveVotes,
                    AVG(IFNULL(N.value, 0)) AS negativeVotes,
                    C.createdAt
                FROM comments C
                LEFT JOIN positiveVotes P ON P.commentsId = C.id
                LEFT JOIN negativeVotes N ON N.commentsId = C.id
                INNER JOIN users U ON U.id = C.userId
                WHERE C.id = ?
                GROUP BY C.id
                ORDER BY C.createdAt DESC
            `,
    [userId, userId, userId, commentsId]
  );

  const [photos] = await pool.query(
    `SELECT id, name FROM commentsPhotos WHERE commentsId = ?`,
    [commentsId]
  );

  comments[0].photos = photos;
  comments[0].votedByMe = Boolean(comments[0].votedByMe);
  comments[0].owner = Boolean(comments[0].owner);
  comments[0].positiveVotes = Number(comments[0].positiveVotes);
  comments[0].negativeVotes = Number(comments[0].negativeVotes);

  return {
    ...comments[0],
    photos,
  };
};

export default selectCommentByIdModel;
