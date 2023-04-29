import { useEffect, useState } from "react";
import { fetchAllPokemons, fetchPokemon } from "./services/peticiones.js";
import Pokemons from "./components/Pokemons";
import "./App.css";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [cargando, setCargando] = useState(false);

  const getPokemon = async () => {
    try {
      setCargando(true);
      const res = await fetchAllPokemons(21, 21 * page);
      const promise = res.results.map((pokemon) => {
        return fetchPokemon(pokemon.url);
      });
      const results = await Promise.all(promise);
      setPokemons(results);

      setTotalPage(Math.ceil(res.count / 25));

      //  console.log(results)

      setCargando(false);
    } catch (error) {}
  };

  useEffect(() => {
    getPokemon();
  }, [page]);

  // console.log(pokemons)

  return (
    <div className="App">
      <div>
        <Pokemons
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={totalPage}
          cargando={cargando}
        />
      </div>
    </div>
  );
}

export default App;
