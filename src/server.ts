import express from 'express'
import 'express-async-errors'
import erros from './middlewares/errors'
import routes from './routes/app.routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use(erros)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`)
})
