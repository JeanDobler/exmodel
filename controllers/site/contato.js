var express = require('express')
  , router = express.Router()

// Define routes handling profile requests

router.get('/', function(req, res) {
    res.render('site/contato', {title: "Contato"})
})


router.get('/enviado', function(req, res) {
    res.render('site/contato-enviado', {title: "Contato Enviado"})
})


module.exports = router