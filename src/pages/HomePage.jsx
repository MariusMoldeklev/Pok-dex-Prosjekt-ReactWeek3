import { Counter } from "../components/Counter";

export function HomePage() {
  const title = "Home Page"

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{title}</h1>


      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
    </main>
  )
}