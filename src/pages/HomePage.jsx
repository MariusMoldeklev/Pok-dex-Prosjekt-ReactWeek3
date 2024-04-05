import { PokemonSearch } from "../components/Search";
// import { RandomPokemonButton } from "../components/RandomPokemonButton"

export function HomePage() {
  const title = "Home Page"
 

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{title}</h1>
      <PokemonSearch/>
     


      <section>
      </section>
    </main>
  )
}