import { Outlet } from "react-router-dom";
import NavPort from "./components/NavPort";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white shadow-sm rounded-lg border border-slate-100 px-1"
    >
      <div className="p-5">
        <h1 className="mb-5 border-b-2 border-yellow-200 inline-block font-semibold">
          Portfolio
        </h1>
        <NavPort />
      </div>
      <Outlet />
    </section>
  );
}
