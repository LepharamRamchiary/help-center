import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors())

    // origin: process.env.CORS_ORIGIN
// }))

//json data 
app.use(express.json())
//url data 
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// routes import
import cardRouter from "./routes/card.routes.js"

// routes declaration
app.use("/api/v1/cards", cardRouter)


export { app }