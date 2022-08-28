import express from "express";
import { edit, remove, logout, see, startGithubLogin, finishGithubLogin } from "../controllers/usersController"

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/:id", see);

export default usersRouter;