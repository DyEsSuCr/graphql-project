import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 3000
const DB_NAME = process.env.DB_NAME || 3000
const USER = process.env.USER || 3000
const PWD = process.env.PWD || 3000

export default {
  PORT,
  DB_NAME,
  USER,
  PWD
}
