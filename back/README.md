# TELLIT - Tell me about it

Es un aplicacion web donde los usuarios publican comentarios acerca de determinados temas o topicos. Cada comentario tiene su titulo, descripcion e imangen, y puede ser votado positiva o negativamente.

## Instalar

1. Instalar las dependencias mediante el comando `npm install` o `npm i`.

2. Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

3. Ejecutar `npm run initDb` para crear las tablas necesarias en la base de datos.

4. Ejecutar `npm run dev` para lanzar el servidor.

## Endpoints del usuario

- **POST** - `/users/register` - Crea un nuevo usuario pendiente de activar.
- **PUT** - `/users/validate/:registrationCode` - Valida a un usuario recién registrado.
- **POST** - `/users/login` - Logea a un usuario retornando un token.
- **GET** - `/users/:userId` - Retorna información pública de un usuario.
- **PUT** - `/users/:userId` - Actualizar nombre de usuario y correo electronico.
- **GET** - `/users` - Retorna información privada del usuario con el id del token.
- **PUT** - `/users/profilephoto` - Permite actualizar la foto de perfil del usuario.
- **PUT** - `/users/backgroundimg` - Permite actualizar la imagen de fondo del perfil del usuario.
- **POST** - `/users/password/recover` - Envía al usuario un correo de recuperación de contraseña.
- **PUT** - `/users/password` - Actualiza la contraseña de un usuario mediante un código de recuperación.

## Endpoints del diario

- **POST** - `/comments` - Crea un comentario.
- **GET** - `/comments` - Muestra el listado de comentarios.
- **GET** - `/comments/:commentsId` - Muestra un comentario determinado.
- **POST** - `/comments/:commentsId/photos` - Agregar una foto a al comentario.
- **DELETE** - `/comments/:commentsId/photos/:photoId` - Eliminar una foto del comentario.
- **POST** - `/comments/:commentsId/positivevotes` - Vota una entrada positivamente.
- **POST** - `/comments/:commentsId/negativevotes` - Vota una entrada negativamente.
