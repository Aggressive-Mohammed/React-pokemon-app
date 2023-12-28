import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    // Define a function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(currentPageUrl, {
          signal: controller.signal,
        });

        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);

        setPokemon(response.data.results.map((p) => p.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();

    return () => controller.abort();
  }, [currentPageUrl]);

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }


  if (loading === true) return "Loading...";

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination 
        gotoNextPage={nextPageUrl ?gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default App;
