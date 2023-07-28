
import express from "express"
import * as dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT || 3030;
import {run2} from "./destination.js"
import { generateEmbeddings } from "./generateEmbeddings.js";


const app = express();

// For parsing application/json
app.use(express.json());

app.post("/langchain",async(req,res)=>{

  try{
    console.log(req.body)
    const message = req.body?.message;
    const count = req.body?.count;

    const result = await run2(req.body?.message,count);
    
      res.json(result)
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
