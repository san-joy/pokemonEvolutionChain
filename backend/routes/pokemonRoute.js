const express = require("express");
const PokemonController = require("../controllers/pokemonController");
const router = express.Router();

router.get("/evolution/:pokemonName", PokemonController.getEvolutionChain);

module.exports = router;