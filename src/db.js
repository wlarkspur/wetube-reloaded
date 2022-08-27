import mongoose from "mongoose";

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB")
const handleError = (error) => console.log("BD Error", error);

db.on("error", handleError);
db.once("open", handleOpen);




