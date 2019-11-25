const mysql = require('../config/mysql');
module.exports = (app) =>{

    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })
}