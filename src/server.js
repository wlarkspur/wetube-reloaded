
import express from "express";
import morgan from "morgan";
import session from "express-session";
import Mongostore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import usersRouter from "./routers/usersRouter"; 
import { localsMiddleware } from "./middlewares";



const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: Mongostore.create({mongoUrl: process.env.DB_URL }),
  })
);


app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", usersRouter);

export default app;

