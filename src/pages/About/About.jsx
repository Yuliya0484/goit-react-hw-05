import { NavLink, Outlet } from "react-router-dom";
import s from "./About.module.css";
const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est vel
        laborum eaque iure quaerat accusamus voluptatum hic, odit possimus
        mollitia autem qui recusandae enim tempora quasi. Sequi, cupiditate
        vitae!
      </p>
      <nav className={s.about_nav}>
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="team">Team</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
