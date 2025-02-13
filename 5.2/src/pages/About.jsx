import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        voluptatum soluta atque, eveniet totam exercitationem deserunt
        voluptatibus laudantium repudiandae harum. Ad non eos, quaerat velit
        alias ea commodi quas suscipit.
      </p>
      <nav className="nav">
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
        <NavLink to="team">Team</NavLink>
      </nav>
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  );
};
export default About;
