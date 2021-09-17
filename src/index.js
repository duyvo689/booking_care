import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import webRouters from "./route/web"
require('dotenv').config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

viewEngine(app)
webRouters(app)

let port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
