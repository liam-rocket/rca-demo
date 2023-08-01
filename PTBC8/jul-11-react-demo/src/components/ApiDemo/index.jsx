import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDemo = () => {
  const [dogImage, setDogImage] = useState('');

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  const getDogImage = async () => {
    try {
      const response = await axios.get(
        'http://dog.ceo/api/breeds/image/random'
      );
      setDogImage(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const getPokemon = async (pokemonName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log(response);
      setPokemonImage(response.data.sprites.front_default);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDogImage();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setPokemonName(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getPokemon(pokemonName);
  };

  return (
    <section className="white-bg">
      <img src={dogImage} alt="image of a dog"></img>
      <button onClick={async () => await getDogImage()}>Get Dog Image</button>

      <br />

      <form onSubmit={handleSubmit} id="form-wrapper">
        <label>Pokemon Name:</label>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleChange}
        />
        <input type="submit" value="Get Pokemon" />
      </form>

      <br />

      <img src={pokemonImage} alt="image of a pokemon"></img>
    </section>
  );
};

export default ApiDemo;
