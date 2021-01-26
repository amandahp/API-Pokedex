const router = require('express').Router();


router.get('/', function(req, res){
    res.json({
        status: '200',
        messagem: 'API working',
    });
});

const pokedexDataController = require('../controllers/pokedexDataController');

router.route('/pokedex')
    .get(pokedexDataController.getPokemon)


module.exports = router;