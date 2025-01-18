import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import MusicPlayer from "../MusicPlayer/MusikPlayer";

const Navigation = () => {
  return (
    <header className={s.header}>
      <MusicPlayer />
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
