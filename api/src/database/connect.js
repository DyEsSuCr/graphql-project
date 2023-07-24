import { Sequelize } from 'sequelize'
import env from '../config.js'

export const sequelize = new Sequelize(env.DB_NAME, env.USER, env.PWD, {
  dialect: 'postgres',
  database: env.DB_NAME
})

export const dbConnect = async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('🆗✅🆗 Connected database 🆗✅🆗')
  } catch (err) {
    console.error(`🛑⛔ Not connection database ❗${err}❗ ⛔🛑`)
  }
}
