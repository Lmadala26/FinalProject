import express from "express";
import userRoutes from "./userRoutes.js";
import entryRoutes from "./entryRoutes.js";

const router = express.Router();

router.use(userRoutes);
router.use(entryRoutes);

export default router;
