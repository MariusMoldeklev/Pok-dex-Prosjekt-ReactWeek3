import { useEffect, useState } from "react";
import { EvolutionCard } from "../evolutionCard/evolutionCard";
import "./evolution.css";

export function Evolutions(params) {
  const { pokemonId } = params;

  const [evolutionData, setEvolutionData] = useState(null);

  // in useeffect we fetch the data from the api and then we fetch url from the data and then we fetch the data from the url
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const evolutionChainUrl = data.evolution_chain.url;
        const evolutionChainResponse = await fetch(evolutionChainUrl);

        if (!evolutionChainResponse.ok) {
          throw new Error("Failed to fetch evolution chain data");
        }
        const evolutionChainData = await evolutionChainResponse.json();
        setEvolutionData(evolutionChainData.chain);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemonId]);

  if (evolutionData) {
    console.log(evolutionData);
  }

  if (!evolutionData) {
    return <h1>Loading...</h1>;
  } else if (evolutionData.evolves_to.length === 0) {
    return (
      <section className="EvolutionSection">
        <h3 className="EvolutionHeaderText">Evolution</h3>
        <div className="EvolutionContainerDiv">
          <EvolutionCard pokemonName={evolutionData.species.name} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="EvolutionSection">
        <h3 className="EvolutionHeaderText">Evolutions</h3>
        <div className="EvolutionContainerDiv">
          <EvolutionCard pokemonName={evolutionData.species.name} />

          {evolutionData.evolves_to.length > 0 && (
            <p className="EvolutionArrow"> ﹀</p>
          )}

          {evolutionData.evolves_to.map((species) => {
            return (
              <EvolutionCard
                key={species.species.name}
                pokemonName={species.species.name}
              />
            );
          })}

          {evolutionData.evolves_to[0].evolves_to.length > 0 && (
            <p className="EvolutionArrow"> ﹀</p>
          )}

          {evolutionData.evolves_to.map((species) =>
            species.evolves_to.map((species2) => {
              return (
                <EvolutionCard
                  key={species2.species.name}
                  pokemonName={species2.species.name}
                />
              );
            })
          )}
        </div>
      </section>
    );
  }
}
