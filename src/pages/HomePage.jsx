import { EventHandling } from "../componets/EventHandling/EventHandling";
import { InlineEventHandling } from "../componets/InlineEventHandling/InlineEventHandling";
import { InputText } from "../componets/InputText/InputText";
import { MouseTracker } from "../componets/MouseTracker/MouseTracker";
import { Counter } from "../componets/counter/Counter";

export function HomePage() {
  const title = "Home Page"

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{title}</h1>

      <section>
        <h2>Innline Event Handling</h2>
        <InlineEventHandling />
      </section>

      <section>
        <h2>Event Handling</h2>
        <EventHandling />
      </section>

      <section>
        <h2>Input Text</h2>
        <InputText />
      </section>

      <section>
        <h2>Mouse Tracker</h2>
        <MouseTracker />
      </section>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
    </main>
  )
}