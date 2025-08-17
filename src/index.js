import express from "express"
import dotenv from "dotenv"
dotenv.config()
const setupAndStartServer = async () => {
  const app = express()
  app.use(express.json())
  app.listen(process.env.PORT, () => {
    console.log("server logs" + process.env.PORT)
  })
}

setupAndStartServer()
