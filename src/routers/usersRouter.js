import express from "express";
import { getEdit,
         postEdit,
         logout,
         see,
         startGithubLogin,
         finishGithubLogin,
         startKakaoLogin,
         finishKakaoLogin,
     } from "../controllers/usersController"

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.route("/edit").get(getEdit).post(postEdit);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/kakao/start", startKakaoLogin);
usersRouter.get("/kakao/finish", finishKakaoLogin);
usersRouter.get("/:id", see);

export default usersRouter;