// Importamos las dependencias.
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { v4 as uuid } from "uuid";

import { saveFileError, deleteFileError } from "./errorService.js";

import { UPLOADS_DIR } from "../../env.js";

export const savePhotoService = async (img, width) => {
  try {
    const uploadsDir = path.join(process.cwd(), ".", UPLOADS_DIR);
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir);
    }
    const sharpImg = sharp(img.data);

    sharpImg.resize(width);
    const imgName = `${uuid()}.jpg`;
    const imgPath = path.join(uploadsDir, imgName);
    await sharpImg.toFile(imgPath);
    return imgName;
  } catch (err) {
    console.error(err);
    saveFileError();
  }
};

export const deletePhotoService = async (imgName) => {
  try {
    const imgPath = path.join(process.cwd(), ".", UPLOADS_DIR, imgName);
    try {
      await fs.access(imgPath);
    } catch {
      return;
    }
    await fs.unlink(imgPath);
  } catch (err) {
    console.error(err);
    deleteFileError();
  }
};
