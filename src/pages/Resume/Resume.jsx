import { workingHistory, educationHistory } from "../../utils/resumeDate";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-white shadow-sm rounded-lg border border-slate-100"
    >
      <div className="p-5">
        <h1 className="mb-5">Resume</h1>
        <div className="grid grid-cols-2">
          <div className="relative">
            <ol className="left-5 relative border-s-2 border-gray-200 dark:border-gray-700">
              <li className="mb-8 ms-4 flex items-center">
                <div className="absolute -start-5 flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full border border-yellow-300 shadow-md">
                  <i className="fas fa-shopping-bag" />
                </div>
                <span className="ms-3 font-semibold">Experience</span>
              </li>
              {workingHistory.map((item) => {
                return (
                  <li className="mb-2 ms-4 text-sm">
                    <div className="absolute w-3 h-3 bg-yellow-200 rounded-full mt-1.5 -start-[7.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded-full w-14 bg-blue-600">
                        <img
                          src={item.img}
                          alt={item.company}
                          className="w-full"
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
                    <ul>
                      {item.description.map((desc) => {
                        return <li>- {desc}</li>;
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="relative">
            <ol className="left-5 relative border-s-2 border-gray-200 dark:border-gray-700">
              <li className="mb-8 ms-4 flex items-center">
                <div className="absolute -start-5 flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full border border-yellow-300 shadow-md">
                  <i className="fas fa-graduation-cap" />
                </div>
                <span className="ms-3 font-semibold">Formal Education</span>
              </li>
              {educationHistory.map((item) => {
                return (
                  <li className="mb-2 ms-4 text-sm">
                    <div className="absolute w-3 h-3 bg-yellow-200 rounded-full mt-1.5 -start-[7.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="overflow-hidden rounded-full w-20">
                        <img
                          src={item.img}
                          alt={item.title}
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
                      {item.description.map((desc) => {
                        return (
                          <div className="flex flex-col text-slate-800 cursor-pointer">
                            <li>{desc.title}</li>
                          </div>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
