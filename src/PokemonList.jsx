import React from "react";

function PokemonList({ pokemon }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Pokemon Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((p) => (
            <tr key={p}>
              <td>{p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonList;
