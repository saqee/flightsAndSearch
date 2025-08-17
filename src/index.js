const express = require("express")
const dotenv = require("dotenv")
const { City } = require("./models/index")
dotenv.config()
const setupAndStartServer = async () => {
  const app = express()
  app.use(express.json())
  app.use("/api", require("./routes/index.js"))
  app.listen(process.env.PORT, async () => {
    console.log("server logs" + process.env.PORT)
  })
}

setupAndStartServer()
