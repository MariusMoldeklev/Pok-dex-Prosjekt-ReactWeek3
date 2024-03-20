import { Link, Outlet } from "react-router-dom";
import style from './Layout.module.css'

export function Layout() {
  return (
    <div className={style.app}>
      <header className={style.navbar}>
        <p>Event Handling</p>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
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
  )
}