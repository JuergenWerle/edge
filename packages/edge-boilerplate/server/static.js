import express from "express"
import { PUBLIC_PATH, CLIENT_OUTPUT, PRODUCTION_PORT } from "../config"

/* eslint-disable no-console */

const server = express()

console.log("Public-Path:", PUBLIC_PATH)
console.log("Output-Path:", CLIENT_OUTPUT)

server.use("/", express.static(CLIENT_OUTPUT))
server.use(PUBLIC_PATH, express.static(CLIENT_OUTPUT))

server.listen(PRODUCTION_PORT, () => {
  console.log(`Static Server Started @ Port ${PRODUCTION_PORT}`)
})
