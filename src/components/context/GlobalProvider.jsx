import { dataContext } from "./dataContext";
import { project } from "../../utils/portfolio/portfolio";
import { useEffect, useState } from "react";

export default function GlobalProvider(prop) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(project);
  }, []);

  const portfolio = {
    projects,
  };
  return (
    <dataContext.Provider value={portfolio}>
      {prop.children}
    </dataContext.Provider>
  );
}
