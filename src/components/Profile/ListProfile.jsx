export default function ListProfile({ label, value, mail, link, username }) {
  return (
    <li className="mb-2 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <p className="text-sm font-normal text-gray-700">
        {label}
        {!mail ? (
          !link ? (
            <span className="text-gray-500 dark:text-gray-400 ml-1">
              {value}
            </span>
          ) : (
            <a
              href={value}
              className="text-blue-500 hover:text-blue-700 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {username}
            </a>
          )
        ) : (
          <a
            href={`mailto:${value}`}
            className="text-blue-500 hover:text-blue-700 ml-1"
          >
            {value}
          </a>
        )}
      </p>
    </li>
  );
}
