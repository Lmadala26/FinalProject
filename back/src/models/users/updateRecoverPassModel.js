import getPool from "../../db/getPool.js";

import emailUtil from "../../utils/emailUtil.js";

const updateRecoverPassModel = async (email, recoverPassCode) => {
  const pool = await getPool();

  await pool.query(`UPDATE users SET recoverPassCode = ? WHERE email = ?`, [
    recoverPassCode,
    email,
  ]);

  const emailSubject =
    "Recupera tu contraseña / Recover your password - Tellit ";

  const emailBody = `
            Ha solicitado la recuperación de contraseña. 
                
            Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}

            Si no has sido tú ignora este email.

            -----------------------------------

            You have requested password recovery. 
                
            Use the following code to create a new password: ${recoverPassCode}

            If it was not you, please ignore this email.
        `;

  await emailUtil(email, emailSubject, emailBody);
};

export default updateRecoverPassModel;
