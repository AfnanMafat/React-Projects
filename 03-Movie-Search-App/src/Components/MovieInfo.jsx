import React from "react";
import axios from "axios";
import { useEffect } from "react";
import MyContext from "../ContextProvider/MyContext";
import { Link } from "react-router";

export default function MovieInfo() {
  // const [movie, setMovie] = React.useState(name);
  // const [year, setYear] = React.useState(released);
  const [MovieData, setMovieData] = React.useState([]);
  const [Fetch,setFetch] = React.useState(false);

  const { n, r } = React.useContext(MyContext);

  console.log(n, r);

  useEffect(() => {
    // setMovie(n);
    // setYear(r);
    FetchData();
  },[r,n]);

  const FetchData = () => {
    axios
      .get(`http://www.omdbapi.com/?t=${n}&y=${r}&apikey=fe0459c2`)
      .then((res) => {
        setMovieData(res.data);
        
        if(res.data.Response == "True"){
          setFetch(true);
        }
        
      });
  };


  return (
    <>

      {Fetch ?  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
              Movie Information Dashboard
            </span>
          </h1>
          <p className="text-blue-200 font-medium">
            Discover comprehensive details about your favorite films
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-6 bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center">
              {MovieData.Poster && MovieData.Poster !== "N/A" ? (
                <img
                  src={MovieData.Poster}
                  alt="Poster"
                  className="rounded-xl shadow-2xl border-4 border-yellow-500 w-full max-w-md h-auto"
                />
              ) : (
                <div className="bg-gray-700 border-2 border-dashed border-gray-500 rounded-xl w-full h-96 flex items-center justify-center">
                  <span className="text-gray-400">Poster not available</span>
                </div>
              )}

              <div className="mt-6 w-full max-w-md">
                <div className="bg-gray-700 bg-opacity-60 rounded-xl p-4 mb-4">
                  <h2 className="text-2xl font-bold text-white text-center mb-2">
                    {MovieData.Title}
                  </h2>
                  <div className="flex justify-center space-x-4">
                    <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-bold">
                      {MovieData.Year}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {MovieData.Rated}
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {MovieData.Runtime}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <InfoCard label="Type" value={MovieData.Type} />
                  <InfoCard label="Released" value={MovieData.Released} />
                  <InfoCard label="DVD Release" value={MovieData.DVD} />
                  <InfoCard label="Box Office" value={MovieData.BoxOffice} />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-500 border-opacity-30">
                  Movie Synopsis
                </h3>
                <p className="text-white leading-relaxed text-lg">
                  {MovieData.Plot || "Plot description not available"}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-500 border-opacity-30">
                  Production Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard label="Director" value={MovieData.Director} />
                  <InfoCard label="Writer" value={MovieData.Writer} />
                  <InfoCard label="Actors" value={MovieData.Actors} />
                  <InfoCard label="Production" value={MovieData.Production} />
                  <InfoCard label="Country" value={MovieData.Country} />
                  <InfoCard label="Language" value={MovieData.Language} />
                  <InfoCard
                    label="Website"
                    value={
                      MovieData.Website && MovieData.Website !== "N/A" ? (
                        <a
                          href={MovieData.Website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Visit Website
                        </a>
                      ) : (
                        "N/A"
                      )
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-500 border-opacity-30">
                    Ratings & Awards
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700 bg-opacity-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">
                          IMDb Rating
                        </span>
                        <span className="text-2xl font-bold text-yellow-400">
                          {MovieData.imdbRating || "N/A"}
                          <span className="text-lg text-gray-400">/10</span>
                        </span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{
                            width: MovieData.imdbRating
                              ? `${parseFloat(MovieData.imdbRating) * 10}%`
                              : "0%",
                          }}
                        ></div>
                      </div>
                      <div className="text-gray-400 text-sm mt-1">
                        {MovieData.imdbVotes} votes
                      </div>
                    </div>

                    <InfoCard
                      label="Metascore"
                      value={
                        MovieData.Metascore && MovieData.Metascore !== "N/A" ? (
                          <span className="text-xl font-bold text-green-500">
                            {MovieData.Metascore}
                          </span>
                        ) : (
                          "N/A"
                        )
                      }
                    />

                    <InfoCard
                      label="Awards"
                      value={
                        MovieData.Awards && MovieData.Awards !== "N/A" ? (
                          <span className="text-yellow-300 font-medium">
                            {MovieData.Awards}
                          </span>
                        ) : (
                          "N/A"
                        )
                      }
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-500 border-opacity-30">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <InfoCard
                      label="Genre"
                      value={
                        MovieData.Genre && MovieData.Genre !== "N/A" ? (
                          <div className="flex flex-wrap gap-1">
                            {MovieData.Genre.split(",").map((genre, index) => (
                              <span
                                key={index}
                                className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                {genre.trim()}
                              </span>
                            ))}
                          </div>
                        ) : (
                          "N/A"
                        )
                      }
                    />
                    <InfoCard label="Content Rating" value={MovieData.Rated} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <Link
            to="/"
            className="
              px-8 py-3 md:px-10 md:py-4
              bg-gradient-to-r from-gray-500 to-gray-800 
              hover:from-gray-600 hover:to-gray-900 
              text-white font-bold rounded-xl 
              cursor-pointer 
              transition-all duration-300 
              transform hover:scale-[1.03] 
              focus:outline-none 
              focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 
              shadow-lg shadow-gray-700/20 
              text-base md:text-lg
              flex items-center justify-center
              w-full max-w-xs
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-1.707L14.586 11H4a1 1 0 110-2h10.586l-5.293-5.293A1 1 0 1110.707 2.293l7 7a1 1 0 010 1.414l-7 7A1 1 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </div>

        {/* <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>Powered by Afnan Mafat © {new Date().getFullYear()}</p>
        </footer> */}
      </div>
    </div> : "" }
    </>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3 hover:bg-opacity-70 transition-all duration-300">
      <div className="text-gray-400 text-sm font-medium mb-1">{label}</div>
      <div className="text-white font-medium">{value || "N/A"}</div>
    </div>
  );
}
