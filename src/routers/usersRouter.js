import express from "express";
import { edit,
         logout,
         see,
         startGithubLogin,
         finishGithubLogin,
         startKakaoLogin,
         finishKakaoLogin,
     } from "../controllers/usersController"

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/kakao/start", startKakaoLogin);
usersRouter.get("/kakao/finish", finishKakaoLogin);
usersRouter.get("/:id", see);

export default usersRouter;