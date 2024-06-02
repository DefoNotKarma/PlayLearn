import express from 'express';
import dotenv from 'dotenv';


dotenv.config({
    path : './.env'
})

const app = express();
const port =  process.env.PORT || 3000;

app.get('/' , (req ,res) => {
    res.send("hello");
});

app.listen(port, ()=>{
    console.log(`server listening at ${port}`);
})
