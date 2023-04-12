import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Demo() {
  // JavaScript does not support Enums, this object is a close approximation
  const LoadCodeEnum = {
    Loading: 0,
    Success: 1,
  };

  const [loadCode, setloadCode] = useState(LoadCodeEnum.Loading);
  const [pokemon, setPokemon] = useState();

  let url = 'https://pokeapi.co/api/v2/pokemon/4';

 
  useEffect(() => {
    setTimeout(
      () =>
        axios.get(url).then((response) => {
          setPokemon(response.data);
          setloadCode(LoadCodeEnum.Success);
        }),
      1000
    );
  }, []);

  if (loadCode === LoadCodeEnum.Loading) {
    return <div className='App'>Loading...</div>;
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
    </>
  );
}
