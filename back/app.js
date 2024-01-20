import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";

import routes from "./src/routes/index.js";

import errorController from "./src/controllers/errors/errorController.js";

import { PORT, UPLOADS_DIR } from "./env.js";

const app = express();

app.use(morgan("dev"));

app.use(express.static(UPLOADS_DIR));

app.use(express.json());

app.use(fileUpload());

app.use(routes);

app.use(errorController);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
