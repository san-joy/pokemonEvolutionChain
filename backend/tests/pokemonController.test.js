const request = require('supertest');
const express = require('express');
const axios = require('axios');
const axiosMockAdapter = require('axios-mock-adapter');
const pokemonRoutes = require('../routes/pokemonRoute');

const app = express();
app.use('/api', pokemonRoutes);

const mock = new axiosMockAdapter(axios);

describe('Pokemon Controller Tests', () => {
  it('should get evolution chain for a valid Pokémon', async () => {
    // Mocking external API responses
    const pokemonResponseData = {
      species: { url: 'https://pokeapi.co/api/v2/pokemon-species/10/' }, // Caterpie
    };
    const speciesResponseData = {
      evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/10/' },
    };
    const evolutionChainResponseData = {
      chain: {
        species: { name: 'caterpie' },
        evolves_to: [
          {
            species: { name: 'metapod' },
            evolves_to: [
              {
                species: { name: 'butterfree' },
                evolves_to: [],
              },
            ],
          },
        ],
      },
    };

    mock.onGet('https://pokeapi.co/api/v2/pokemon/caterpie').reply(200, pokemonResponseData);
    mock.onGet('https://pokeapi.co/api/v2/pokemon-species/10/').reply(200, speciesResponseData);
    mock.onGet('https://pokeapi.co/api/v2/evolution-chain/10/').reply(200, evolutionChainResponseData);

    const response = await request(app).get('/api/evolution/caterpie');

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('caterpie');
    expect(response.body.variations).toHaveLength(1);

    const metapod = response.body.variations[0];
    expect(metapod.name).toBe('metapod');
    expect(metapod.variations).toHaveLength(1);

    const butterfree = metapod.variations[0];
    expect(butterfree.name).toBe('butterfree');
    expect(butterfree.variations).toHaveLength(0);
  });

  it('should handle error gracefully', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon/nonexistentpokemon').reply(404); // Simulate a not found error

    const response = await request(app).get('/api/evolution/nonexistentpokemon');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Error fetching evolution data');
  });
});
