import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={s.nav}>
      <Link to="/dogs" className={s.link}>
        Dogs
      </Link>
      <Link to="/birds" className={s.link}>
        Birds
      </Link>
      <Link to="/people" className={s.link}>
        People
      </Link>
      <Link to="/" className={s.link}>
        Store
      </Link>
    </div>
  );
}
