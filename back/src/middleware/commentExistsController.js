import getPool from "../db/getPool.js";
import { notFoundError } from "../services/errorService.js";

const commentExistsController = async (req, res, next) => {
  try {
    const pool = await getPool();

    const { commentsId } = req.params;

    const [comments] = await pool.query(
      `SELECT id FROM comments WHERE id = ?`,
      [commentsId]
    );
    if (comments.length < 1) {
      notFoundError("comentario / comment");
    }
    next();
  } catch (err) {
    next(err);
  }
};

export default commentExistsController;
