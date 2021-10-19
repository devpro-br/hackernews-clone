const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const { OpenApiValidator } = require('express-openapi-validator')

const config = require('./config')
const swaggerDocument = YAML.load(config.OPENAPI_SPEC)

const news = require('./controllers/news')

const YELLOW = '\x1b[33m%s\x1b[0m'
const WHITE = '\x1b[37m'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(logger('dev'))
app.use(cors({ credentials: true, origin: config.ORIGIN_URL }))
app.use('/api/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

new OpenApiValidator({
  apiSpec: config.OPENAPI_SPEC,
  validateRequests: true,
  validateResponses: false,
})
  .install(app)
  .then(() => {
    app.get('/api/news', news.listNews)

    http: app.listen(config.PORT, () => {
      console.log(
        YELLOW,
        '🆙 JSON Server is running on port: ' + config.PORT,
        WHITE
      )
    })
  })
