import { Link, Outlet } from "react-router-dom";
import style from "./Layout.module.css";

export function Layout() {
  return (
    <div className={style.app}>
      <header className={style.navbar}>
        <p>Navbar ((layout))</p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/next">Next</Link>
            </li>
            <li>
              <Link to="/pokemonIndex/1">PokeminIndex</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className={style.main}>
        {/* Sett inn side innholdet her */}
        <Outlet />
      </div>

      <footer className={style.footer}>
        <p>Kodehodet Modul D</p>
      </footer>
    </div>
  );
}
