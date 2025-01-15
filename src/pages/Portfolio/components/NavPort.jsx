import { NavLink } from "react-router-dom";
export default function NavPort() {
  return (
    <nav>
      <ul className="flex gap-4 text-sm font-semibold text-slate-500">
        <li>
          <NavLink
            to="all"
            className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="javascript"
            className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          >
            JavaScript
          </NavLink>
        </li>
        <li>
          <NavLink
            to="php"
            className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          >
            PHP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="figma"
            className={({ isActive }) => (isActive ? "text-yellow-300" : "")}
          >
            Figma
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
