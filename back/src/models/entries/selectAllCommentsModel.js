// import getPool from "../../db/getPool.js";

// const selectAllCommentsModel = async (keyword = "", userId = "") => {
//   const pool = await getPool();

//   const [comments] = await pool.query(
//     `
//                 SELECT
//                     C.id,
//                     C.title,
//                     C.topic,
//                     C.description,
//                     C.userId = ? AS owner,
//                     C.createdAt
//                 FROM comments C
//             `,
//     [userId, userId, `%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
//   );

//   return comments;
// };

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
      U.username AS username,
      U.profilePhoto AS profilePhoto,
      C.createdAt
    FROM 
      comments C
    JOIN 
      users U ON C.userId = U.id
    WHERE 
      C.description LIKE ? OR
      C.title LIKE ? OR
      C.topic LIKE ?
    `,
    [userId, `%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
  );

  return comments;
};

export default selectAllCommentsModel;
