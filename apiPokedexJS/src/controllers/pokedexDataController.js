const { json } = require('body-parser');

exports.getPokemon = function(req, res) {
    const mySqlConnection = require ('../utils/mysql/connectToMySql');

    try {
              const query = 'SELECT * FROM pokedex'; //query que insiro no terminal
              console.log('aqui') 
          mySqlConnection.query(query, (error, result) => { //.query = função da biblioteca mysql dps que conectou; essa função espera duas coisas; a query (a variavel); e o array que contem os dados que a gente digitou na query (o ponto de interrogação)
                        console.log(result)
                        console.log('teste')
                        if(error) {
                          console.log(error)
                          // res.status(500).json({message: 'error on inserting data to macapa db'})
                      }
                      // inserted rows -> 4
                    res.status(200).send(JSON.stringify(result)) //success = deu certo para inserir
                  });
    } catch(e) {
        res.status(500).json({message: `error on geting data from db ${e}`}) //catch = quebrou
    }

}