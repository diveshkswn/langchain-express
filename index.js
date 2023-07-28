
import express from "express"
import cors from "cors"
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config()
const PORT = process.env.PORT || 3030;
import {run2} from "./destination.js"
import { generateEmbeddings } from "./generateEmbeddings.js";


const app = express();



app.use(cors());


// For parsing application/json
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post("/langchain",async(req,res)=>{

  try{
    console.log(req.body)
    const message = req.body?.message;
    const count = req.body?.count;

    const result = await run2(message,count);
    
      res.status(200).json(result)
  }

  catch(e){
    res.status(500).json({message : `Error : ${e}`})
  }

})

app.get("/generateEmbeddings",async(req,res)=>{

  try{
    console.log(req.body);

    generateEmbeddings();
    res.json({message : "Embeddings Generated"});
  }

  catch(e){
    res.status(500).json({message : `Error : ${e}`})
  }

})



// error handler


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
