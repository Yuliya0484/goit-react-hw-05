import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

function Navigation() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home Page
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies Page
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
