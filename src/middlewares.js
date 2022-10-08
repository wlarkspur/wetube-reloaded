const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
  /**apiVersion: "2022-10-07",
  statement: [{
    Resource: "arn:aws:s3:::mizenker/*",
    Sid: "PublicReadGetObject",
    Effect: "Allow",
    Principal: "*",
    Action: "s3:GetObject",
  }],**/
  
});

const multerUploader = multerS3({
  s3: s3,
  bucket: "mizenker",
  Condition: {
    StringEquals: {
      "s3:x-amz-acl": ["public-read"],
    },
  }
  
});

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  console.log(req.session.user);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Login first :)");
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000,
  },
  storage: multerUploader,
});
export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 100000000,
  },
  storage: multerUploader,
});
