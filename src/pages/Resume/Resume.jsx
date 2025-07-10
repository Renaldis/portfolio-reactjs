import {
  workingHistory,
  educationHistory,
  nonFormalEducation,
} from "../../utils/resumeDate";
import { useEffect, useState } from "react";
import "../animate/slideDown.css";

export default function Resume() {
  const [isActiveDescValue, setIsActiveDescValue] = useState();
  const [nonFormal, setNonFormal] = useState([]);

  useEffect(() => {
    setNonFormal(nonFormalEducation);
  }, []);
  function handleOpenDescValue(id) {
    if (isActiveDescValue?.id === id) {
      setIsActiveDescValue(null);
    } else {
      setIsActiveDescValue(nonFormal.find((nf) => nf.id === id));
    }
  }
  return (
    <section
      id="resume"
      className="bg-white shadow-sm rounded-lg border border-slate-100 px-1"
    >
      <div className="p-5">
        <h1 className="mb-5 border-b-2 border-yellow-200 inline-block font-semibold">
          Resume
        </h1>
        <div className="md:grid grid-cols-2 md:border-b border-gray-200 flex flex-col-reverse">
          {/* Formal Education */}
          <div className="relative">
            <ol className="left-5 relative border-s-2 border-gray-200 dark:border-gray-700">
              <li className="mb-8 ms-4 flex items-center">
                <div className="absolute -start-5 flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full border border-yellow-300 shadow-md">
                  <i className="fas fa-graduation-cap" />
                </div>
                <span className="ms-3 font-semibold">Formal Education</span>
              </li>
              {educationHistory?.length ? (
                educationHistory.map((item, idx) => (
                  <li key={idx} className="mb-2 ms-4 text-sm">
                    <div className="absolute w-3 h-3 bg-yellow-200 rounded-full mt-1.5 -start-[7.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded-full w-20">
                        <img
                          src={item.img}
                          alt={`Institution Logo of ${item.title}`}
                          className="w-full"
                        />
                      </div>
                      <h1 className="font-semibold">{item.title}</h1>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500">{item.date}</span>
                      <span className="text-slate-500">{item.location}</span>
                    </div>
                    <h1 className="text-slate-700">Learn:</h1>
                    <ul className="list-disc ms-4">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-slate-800">
                          {desc.title}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              ) : (
                <p>No education history available.</p>
              )}
            </ol>
          </div>
          {/* Working History */}
          <div className="relative mb-5 md:mb-0">
            <ol className="left-5 relative border-s-2 border-gray-200 dark:border-gray-700">
              <li className="mb-8 ms-4 flex items-center">
                <div className="absolute -start-5 flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full border border-yellow-300 shadow-md">
                  <i className="fas fa-shopping-bag" />
                </div>
                <span className="ms-3 font-semibold">Experience</span>
              </li>
              {workingHistory?.length ? (
                workingHistory.map((item, idx) => (
                  <li key={idx} className="mb-2 ms-4 text-sm">
                    <div className="absolute w-3 h-3 bg-yellow-200 rounded-full mt-1.5 -start-[7.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded-full w-14 bg-blue-600">
                        <img
                          src={item.img}
                          alt={`Logo of ${item.company}`}
                          className="w-full bg-white"
                        />
                      </div>
                      <h1 className="font-semibold">{item.title}</h1>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500">{item.date}</span>
                      <span className="text-slate-500">
                        {item.location} | {item.locType}
                      </span>
                    </div>
                    <ul className="list-disc ms-4">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-slate-800">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))
              ) : (
                <p>No working history available.</p>
              )}
            </ol>
          </div>
        </div>

        {/* Non-Formal Education */}
        <div className="grid mt-10">
          <div className="relative">
            <ol className="left-5 relative border-s-2 border-gray-200 dark:border-gray-700">
              <li className="mb-8 ms-4 flex items-center">
                <div className="absolute -start-5 flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full border border-yellow-300 shadow-md">
                  <i className="fas fa-graduation-cap" />
                </div>
                <span className="mx-3 font-semibold">Non-Formal Education</span>
              </li>
              {nonFormal?.length ? (
                nonFormal.map((item, idx) => (
                  <li key={idx} className="mb-2 ms-4 text-sm">
                    <div className="absolute w-3 h-3 bg-yellow-200 rounded-full mt-1.5 -start-[7.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded-full w-20">
                        <img
                          src={item.img}
                          alt={`Institution Logo of ${item.title}`}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <h1 className="font-semibold">{item.title}</h1>
                    <div className="flex flex-col">
                      <span className="text-slate-500">
                        {item.type} - {item.location}
                      </span>
                      <span className="text-slate-500">{item.date}</span>
                    </div>
                    <button
                      className={`text-slate-700 border rounded-full inline-flex items-center px-2 py-1 cursor-pointer hover:bg-yellow-200 focus:outline-none transition ${
                        isActiveDescValue?.id === item.id && "bg-yellow-200"
                      }`}
                      onClick={() => handleOpenDescValue(item.id)}
                    >
                      Learn:
                      <span
                        className={`ml-1 transform transition-transform ${
                          isActiveDescValue?.id === item.id && "rotate-180"
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {isActiveDescValue?.id === item.id && (
                      <ul className="list-disc ms-4 animate-slide-down">
                        {item.description.map((desc, idx) => (
                          <li key={idx} className="text-slate-800">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))
              ) : (
                <p>No non-formal education available.</p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
