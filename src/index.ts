import express from 'express'
import { appendFileSync } from 'fs'
import path from 'path'
const app = express()
const port = 8080

// Configure EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/logan', (req, res) => {
  res.send('Hey, Logan!')
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`) // template literal uses variable interpolation
})