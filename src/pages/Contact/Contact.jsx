export default function Contact() {
  return (
    <section className="bg-white shadow-sm rounded-lg border border-slate-100 p-5 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="mb-5 font-semibold border-b-2 border-yellow-200 inline-block">
          Contact Form
        </h1>
        <form action="#" method="POST" className="max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="block w-full rounded-md bg-yellow-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <div className="md:ml-5 mt-5 md:mt-0">
        <h1 className="font-semibold border-b-2 border-yellow-200 inline-block">
          Contact Information
        </h1>
        <div className="mt-5">
          <table>
            <tbody>
              <tr>
                <th className="font-semibold text-start">Address: </th>
                <td className="text-sm">
                  JL. Penganten Ali, Ciracas, Jakarta Timur
                </td>
              </tr>
              <tr>
                <th className="font-semibold text-start">Phone: </th>
                <td className="text-sm">
                  <a
                    href="https://wa.me/+6289675759858"
                    className="text-blue-800 hover:text-blue-900 hover:border-b-2"
                    target="_blank"
                  >
                    +62 89675759858
                  </a>
                </td>
              </tr>
              <tr>
                <th className="font-semibold text-start">Email: </th>
                <td className="text-sm">Renaldis142@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
