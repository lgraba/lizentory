import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import * as sessionAuth from './middleware/sessionAuth'
import * as routes from './routes'

// Initialize config
dotenv.config()

const port = process.env.SERVER_PORT
const app = express()

// Configure Exprss to use EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

sessionAuth.register(app)
routes.register(app)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`) // template literal uses variable interpolation
})