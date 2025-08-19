const express = require("express")
const dotenv = require("dotenv")
const db = require("./models/index.js")
dotenv.config()
const setupAndStartServer = async () => {
  const app = express()
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true,
    })
  )
  app.use("/api", require("./routes/index.js"))
  app.listen(process.env.PORT, async () => {
    console.log("server logs" + process.env.PORT)
    /* if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true })
    } */
  })
}

setupAndStartServer()
