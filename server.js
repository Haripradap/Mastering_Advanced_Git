import express from "express"
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from "url";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

dotenv.config();




app.get('/api/posts',(req,res) => {

})


 
app.listen(5000,() => {
    console.log(`server is running in port {port}`);
});

