import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import MusicPlayer from "../MusicPlayer/MusikPlayer";
import { ImHome } from "react-icons/im";

import { BiSolidCameraMovie } from "react-icons/bi";

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
          <ImHome className={s.icons} size="24" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Movies
          <BiSolidCameraMovie className={s.icons} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
