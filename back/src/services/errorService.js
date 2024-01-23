export const userAlreadyRegisteredError = () => {
  throw {
    httpStatus: 409,
    code: "USER_ALREADY_REGISTERED",
    message: "Nombre de usuario ya registrado / User name already registered",
  };
};

export const emailAlreadyRegisteredError = () => {
  throw {
    httpStatus: 409,
    code: "EMAIL_ALREADY_REGISTERED",
    message: "Email ya registrado / Email already registered",
  };
};

export const invalidCredentialsError = () => {
  throw {
    httpStatus: 401,
    code: "INVALID_CREDENTIALS",
    message: "Credenciales inválidas / Invalid credentials",
  };
};

export const sendEmailError = () => {
  throw {
    httpStatus: 500,
    code: "SEND_EMAIL_FAILED",
    message: "Fallo al enviar el email / Failed to send the email",
  };
};

export const notFoundError = (resource) => {
  throw {
    httpStatus: 404,
    code: "RESOURCE_NOT_FOUND",
    message: `El recurso requerido '${resource}' no existe`,
  };
};

export const pendingActivationError = () => {
  throw {
    httpStatus: 403,
    code: "PENDING_ACTIVATION",
    message:
      "Usuario pendiente de activacion. Verifica tu cuenta antes de continuar / User pending activation. Verify your account before continuing",
  };
};

export const notAuthenticatedError = () => {
  throw {
    httpStatus: 401,
    code: "NOT_AUTHENTICATED",
    message: `Debe enviar un token / You must send a token`,
  };
};

export const recoveryCodeError = () => {
  throw new Error({
    httpStatus: 401,
    code: "INVALID_RECOVERY_CODE",
    message: "Código de recuperación incorrecto / Incorrect recovery code",
  });
};

export const saveFileError = () => {
  throw {
    httpStatus: 500,
    code: "FILE_SAVE_FAILED",
    message: "Error al guardar el archivo / Error saving the file",
  };
};

export const deleteFileError = () => {
  throw {
    httpStatus: 409,
    code: "FILE_DELETED_FAILED",
    message: "Error al eliminar el archivo / Error deleting file",
  };
};

export const unauthorizedUserError = () => {
  throw {
    httpStatus: 409,
    code: "UNAUTHORIZED",
    message:
      "El usuario no está autorizado para realizar esta operación / The user is not authorized to perform this operation",
  };
};

export const photoLimitReachedError = () => {
  throw {
    httpStatus: 409,
    code: "PHOTO_LIMIT_REACHED",
    message:
      "Has alcanzado el límite de tres fotos / You have reached the limit of three photos",
  };
};

export const cannotVoteOwnCommentError = () => {
  throw {
    httpStatus: 403,
    code: "CANNOT_VOTE_OWN_ENTRY",
    message:
      "No puedes votar a tu propio comentario / You cannot vote your own comment ",
  };
};

export const voteAlreadyExistsError = () => {
  throw {
    httpStatus: 409,
    code: "VOTE_ALREADY_EXISTS",
    message:
      "No se puede votar más de una vez al mismo comentario / You cannot vote more than once for the same comment.",
  };
};

export const superuserError = () => {
  throw {
    httpStatus: 403,
    code: "UNAUTHORIZED",
    message:
      "Solo los usuarios autorizados pueden cambiar el rol / Only authorized users can change the role",
  };
};
