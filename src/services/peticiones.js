export async function fetchAllPokemons(limit = 20, offset=0) {
  try {
    const url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}


export async function fetchPokemon(url){
   try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
   } catch (error) {
    console.log(error)
   }
}
