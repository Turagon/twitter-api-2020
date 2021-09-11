const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const helpers = require('./_helpers')
const passport = require('passport')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({ secret: 'iamrex', resave: false, saveUninitialized: false }))

// Passport middleware
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/upload', express.static(__dirname + '/upload'))

app.use(routes)

app.listen(PORT, () => {
  console.log('server on')
})