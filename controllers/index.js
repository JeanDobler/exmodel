var express = require('express')
  , router = express.Router();
  //, models = require('../models')

router.use('/comments', require('./site/comments'))
router.use('/users', require('./site/users'))
router.use('/contato', require('./site/contato'))

router.get('/', function(req, res) {

    //models.comment.findAll({
    //    include: [ models.Task ]
    //}).then(function(row) {
    //    res.render('site/index', {
    //        title: 'Express',
    //        row: row
    //    });
    //});
  //res.render('site/index', {title: "Melhor teste do mundo"})
})

module.exports = router