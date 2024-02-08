import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import getPool from "../../db/getPool.js";

import emailUtil from "../../utils/emailUtil.js";

import {
  emailAlreadyRegisteredError,
  userAlreadyRegisteredError,
} from "../../services/errorService.js";

const insertUserModel = async (username, email, password, registrationCode) => {
  const pool = await getPool();

  let [users] = await pool.query(`SELECT id FROM users WHERE username = ?`, [
    username,
  ]);

  if (users.length > 0) {
    userAlreadyRegisteredError();
  }

  [users] = await pool.query(`SELECT id FROM users WHERE email = ?`, [email]);

  if (users.length > 0) {
    emailAlreadyRegisteredError();
  }

  const emailSubject = "Activa tu usuario / Activate your user - Tellit";

  const emailBody = `
  ¡Bienvenid@ / Welcome ${username}!
  Gracias por unirte a Tellit. Para habilitar tu cuenta, selecciona el enlace siguiente:
  <a href="http://localhost:3000/users/validate/${registrationCode}">Activar tu cuenta / Activate your account </a>
 `;

  await emailUtil(email, emailSubject, emailBody);

  const hashedPass = await bcrypt.hash(password, 10);

  await pool.query(
    `INSERT INTO users(id, username, email, password, registrationCode) VALUES(?, ?, ?, ?, ?)`,
    [uuid(), username, email, hashedPass, registrationCode]
  );
};

export default insertUserModel;
