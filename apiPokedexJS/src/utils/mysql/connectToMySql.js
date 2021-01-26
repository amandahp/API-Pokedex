var mysql = require ('mysql2');


var mySqlConnection  = mysql.createPool
({
    connectionLimit : 10,
    insecureAuth : true,
    host: 'localhost',
    user: 'root',
    password: '229729',
    database: 'pokedex',
});
module.exports = mySqlConnection