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

// Todo: Separate resource routes into separate files and reigster here:
// Put above:
// var routes = require('./routes/index')
// var users  = require('./routes/users')
//
// app.use('/', routes)
// app.use('/users', users)
// app.use('/lizards', lizards)

// Todo: 404 Handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  // err.status = 404;
  next(err);
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`) // template literal uses variable interpolation
})