import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? StyleSheet.active : "")}
          to="/"
        >
          Home Page
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? StyleSheet.active : "")}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
