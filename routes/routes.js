const mysql = require('../config/mysql');
module.exports = (app) =>{

    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })


    app.get('/diploma-courses', function(req,res,next){

        res.render('diploma-courses',{
            "title":"home"
        })
    })


    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })


    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })


    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })


    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })


    app.get('/', function(req,res,next){

        res.render('home',{
            "title":"home"
        })
    })
}