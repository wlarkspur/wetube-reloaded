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
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
usersRouter.get("/github/start", publicOnlyMiddleware,startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
usersRouter.get("/kakao/start", startKakaoLogin);
usersRouter.get("/kakao/finish", finishKakaoLogin);
usersRouter.get("/:id", see);

export default usersRouter;