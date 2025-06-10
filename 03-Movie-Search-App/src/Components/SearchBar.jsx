import React from "react";
import MovieInfo from "./MovieInfo";
import MyContext from "../ContextProvider/MyContext";
import { Link } from "react-router";

export default function SearchBar() {
  const [name, setName] = React.useState("");
  const [released, setReleased] = React.useState("");
  const [Fetch, setFetch] = React.useState(false);

  const { setN, setR } = React.useContext(MyContext);

  const handleSubmit = () => {
    setFetch(true);
  };

  React.useEffect(() => {
    setN(name);
    setR(released);
  }, [name, released]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
              Movie Explorer
            </span>
          </h1>
          <p className="text-blue-200 font-medium">
            Discover comprehensive details about any film
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              Find Movie Information
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Enter a movie title and release year to get comprehensive details
              including cast, ratings, plot summary, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-400 mb-2 font-medium">
                  Movie Title
                </label>
                <input
                  className="w-full px-5 py-4 rounded-xl bg-gray-700 border-2 border-gray-600 focus:border-yellow-500 focus:outline-none text-white text-lg shadow-inner"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Movie Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-medium">
                  Release Year
                </label>
                <input
                  className="w-full px-5 py-4 rounded-xl bg-gray-700 border-2 border-gray-600 focus:border-yellow-500 focus:outline-none text-white text-lg shadow-inner"
                  onChange={(e) => {
                    setReleased(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Released Year"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-8">
              {/* <button
                className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg shadow-yellow-500/20 text-lg"
                onClick={handleSubmit}
              >
                Search Movie
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button> */}
              <Link
                className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg shadow-yellow-500/20 text-lg"
                to="/MovieInfo"
                onClick={handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg> Search Movie
              </Link>
            </div>
          </div>
        </div>

        {Fetch ? (
          <div className="animate-fadeIn">
            {/* <MovieInfo name={name} released={released} /> */}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 bg-opacity-60 rounded-2xl">
            <div className="inline-block bg-gray-700 p-5 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Search for a Movie
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Enter a movie title and release year above to get detailed
              information
            </p>
          </div>
        )}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Powered by Afnan Mafat © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
