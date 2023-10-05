import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
// set maximum payload size to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
// conect db 

 mongoose
  .connect(process.env.DBURL,{  useNewUrlParser: true,
    dbName: 'Jobs'}).then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); 