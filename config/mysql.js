const mysql = require('mysql');

module.exports = {
    connect: async function(){
        return await mysql.createConnection({
            host: 'localhost',
            user:'root',
            password:'',
            port:'3306',
            database:'university'
        })
    }
}