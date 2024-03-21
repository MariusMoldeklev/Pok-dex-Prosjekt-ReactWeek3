// import React from "react"
// import { useState } from "react"

// const API_URL = "https://pokeapi.co/api/v2/pokemon"

// export function API() {
// const [Pokemon, SetPokemon ] = useState("");
// const [pokemonInfo, SetPokemonInfo] = useState(null);

// const getPokemonInfo = async () => {
//     try {
//     const response = await fetch(`${API_URL}`);
//     const data = await response.json();
//     SetPokemonInfo(data);
// } catch (error) {
//     console.error(`Error fetching Pokemon Info`, error);
// }
// }
// const handleSubmit =  (e) =>  {
//     e.preventDefault();
//     getPokemonInfo();
// }
// return (
//     <div>
//         <div>
//             <h1></h1>
//             <form onSubmit={handleSubmit}><input type="text" placeholder="Enter Pokemon Name or Number" value={name, number} /></form>
//         </div>
//     </div>
// )
// }