import express, { json, urlencoded } from "express";
import cors from cors;

const app = express();

app.use(
    express.cors({
        origin : process.env.CORS_ORIGIN,
        credentials : true
    })
)
app.use(
    express.json({
        limit : "20kb"
    })
)
app.use(
    express.urlencoded({
        extended : true,
        limit : "10kb"
    })
)
