import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../../components/context/dataContext";

export default function JavascriptSection() {
  const { projects } = useContext(dataContext);
  const [dataJS, setDataJS] = useState([]);

  useEffect(() => {
    const filteredDataJS = projects.filter(
      (project) => project.tech === "javascript"
    );
    setDataJS(filteredDataJS);
  }, [projects]);

  return (
    <div className="px-5 pb-5">
      <h1 className="font-semibold text-slate-800 mb-2">Javascript</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {dataJS.length > 0 ? (
          dataJS.map((project) => (
            <div
              key={project.id}
              className="container-card w-auto border border-slate-200 rounded-md shadow-sm overflow-hidden"
            >
              <img
                src={project.image_url}
                alt={`${project.id} - ${project.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="px-2 py-1">
                <h2>{project.title}</h2>
                <p className="text-sm text-slate-600">
                  {project.short_descript.length > 40
                    ? `${project.short_descript.slice(0, 40)}...`
                    : project.short_descript}
                </p>
                <div className="flex justify-start gap-3 my-5">
                  {project.link_project.trim() !== "" && (
                    <button className="group text-sm border border-slate-400 px-2 py-1 text-white bg-yellow-300 rounded-full group-hover:bg-white group-hover:text-yellow-300">
                      <a href={project.link_project} target="_blank">
                        Visit Project
                      </a>
                    </button>
                  )}
                  {project.link_github.trim() !== "" && (
                    <button className="group text-sm border border-yellow-200 px-2 py-1 rounded-full text-yellow-400 hover:bg-yellow-300 hover:text-white group-hover:bg-white group-hover:text-yellow-400">
                      <a href={project.link_github} target="_blank">
                        Visit Code
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada projects tersedia.</p>
        )}
      </div>
    </div>
  );
}
