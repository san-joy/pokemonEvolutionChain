const express = require("express");
const axios = require("axios");
const app = express();
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

exports.getEvolutionChain = async (req, res) => {
    const pokemonName = req.params.pokemonName.toLowerCase();

    try {
        const pokemonResponse = await axios.get(`${apiUrl}${pokemonName}`);
        const speciesURL = pokemonResponse.data.species.url;

        const speciesResponse = await axios.get(speciesURL);
        const evolutionChainURL = speciesResponse.data.evolution_chain.url;

        const evolutionChainResponse = await axios.get(evolutionChainURL);
        const evolutionChain = constructEvolutionChain(evolutionChainResponse.data.chain);

        res.json(evolutionChain);
    } catch (error) {
        res.status(500).json({ error: "Error fetching evolution data" });
    }
}

constructEvolutionChain = (chain) => {
    const evolutionChain = {
        name: chain.species.name,
        variations: []
    };

    if (chain.evolves_to.length > 0) {
        evolutionChain.variations = chain.evolves_to.map(evolution =>
            constructEvolutionChain(evolution)
        );
    }

    return evolutionChain;
}