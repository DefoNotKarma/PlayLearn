import express, { json, urlencoded } from "express";

const app = express();

// Backend cors origin settings goes here

app.use(
    express.json({
        limit : "20kb"
    })
)

app.use(
    urlencoded({
        extended : true,
        limit : "10kb"
    })
)
