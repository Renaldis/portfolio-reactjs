import { NavLink } from "react-router-dom";
export default function NavPort() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="all"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="php"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PHP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="javascript"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            JavaScript
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
