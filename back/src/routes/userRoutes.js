import express from "express";

const router = express.Router();

import {
  newUserController,
  loginUserController,
  validateUserController,
  getUserProfileController,
  getOwnUserController,
  recoverPassController,
  editUserPassController,
  editUserInfoController,
  userProfilePhotoController,
  userBackgroundImgController,
  changeUserRoleController,
} from "../controllers/users/index.js";

import {
  userExistsController,
  authUserController,
} from "../middleware/index.js";

router.post("/users/register", newUserController);

router.post("/users/login", loginUserController);

router.put("/users/validate/:registrationCode", validateUserController);

router.get("/users/:userId", userExistsController, getUserProfileController);

router.get(
  "/users",
  authUserController,
  userExistsController,
  getOwnUserController
);

router.post("/users/password/recover", recoverPassController);

router.put("/users/password", editUserPassController);

router.put(
  "/users/profilephoto",
  authUserController,
  userExistsController,
  userProfilePhotoController
);

router.put(
  "/users/backgroundimg",
  authUserController,
  userExistsController,
  userBackgroundImgController
);

router.patch(
  "/users/edit",
  authUserController,
  userExistsController,
  editUserInfoController
);

router.put("/users/:userId/role", authUserController, changeUserRoleController);

export default router;
