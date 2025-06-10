import React, { useEffect } from "react";
import axios from "axios";

export default function SearchBar() {
  const [country, setCountry] = React.useState("");
  const [location, setLocation] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  const HandleSubmit = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?q=${country}&key=4b27c39828de4927862afu7669155176749250906`
      )
      .then((res) => {
        const FetchedLocation = res.data.location;
        const FetchedCurrent = res.data.current;

        setLocation(FetchedLocation);
        setCurrent(FetchedCurrent);
      });
    setVisible(true);
  };

  useEffect(() => {
    HandleSubmit();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 text-transparent bg-clip-text">
              Weather Dashboard
            </span>
          </h1>
          <p className="text-blue-600 font-medium">Real-time weather insights at your fingertips</p>
        </div>
        
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow px-5 py-4 rounded-xl border-2 border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-lg shadow-inner bg-blue-50"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              type="text"
              placeholder="Enter Country or City Name"
            />
            <input
              className="px-6 py-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg shadow-blue-400/30 text-lg"
              type="submit"
              onClick={HandleSubmit}
              value={"Get Weather Details"}
            />
          </div>
        </div>

        {visible ? (
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Weather Details</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {location.name}, {location.country}
                    </div>
                    <div className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {location.tz_id}
                    </div>
                  </div>
                </div>
                <div className="text-xl font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Last Updated: {current.last_updated}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl border-2 border-blue-100 shadow-md">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-700 mb-2">{current.temp_c}°C</div>
                    <div className="text-gray-600 font-medium">Temperature</div>
                    <div className="mt-4 text-blue-600 font-semibold text-lg">{current.condition?.text}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl border-2 border-blue-100 shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 rounded-full p-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{current.feelslike_c}°C</div>
                    <div className="text-gray-600 font-medium">Feels Like</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl border-2 border-blue-100 shadow-md">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 rounded-full p-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{current.wind_kph} km/h</div>
                    <div className="text-gray-600 font-medium">Wind Speed</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100">Detailed Weather Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Region</div>
                    <div className="text-blue-800 font-semibold">{location.region}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Latitude</div>
                    <div className="text-blue-800 font-semibold">{location.lat}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Longitude</div>
                    <div className="text-blue-800 font-semibold">{location.lon}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Condition</div>
                    <div className="text-blue-800 font-semibold">{current.condition?.text}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Dew Point (°C)</div>
                    <div className="text-blue-800 font-semibold">{current.dewpoint_c}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Dew Point (°F)</div>
                    <div className="text-blue-800 font-semibold">{current.dewpoint_f}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Feels Like (°F)</div>
                    <div className="text-blue-800 font-semibold">{current.feelslike_f}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Gust (kph)</div>
                    <div className="text-blue-800 font-semibold">{current.gust_kph}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Gust (mph)</div>
                    <div className="text-blue-800 font-semibold">{current.gust_mph}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Heat Index (°C)</div>
                    <div className="text-blue-800 font-semibold">{current.heatindex_c}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Heat Index (°F)</div>
                    <div className="text-blue-800 font-semibold">{current.heatindex_f}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Precipitation (in)</div>
                    <div className="text-blue-800 font-semibold">{current.precip_in}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Precipitation (mm)</div>
                    <div className="text-blue-800 font-semibold">{current.precip_mm}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Pressure (in)</div>
                    <div className="text-blue-800 font-semibold">{current.pressure_in}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Pressure (mb)</div>
                    <div className="text-blue-800 font-semibold">{current.pressure_mb}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Temperature (°F)</div>
                    <div className="text-blue-800 font-semibold">{current.temp_f}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">UV Index</div>
                    <div className="text-blue-800 font-semibold">{current.uv}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Visibility (km)</div>
                    <div className="text-blue-800 font-semibold">{current.vis_km}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Degree</div>
                    <div className="text-blue-800 font-semibold">{current.wind_degree}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Direction</div>
                    <div className="text-blue-800 font-semibold">{current.wind_dir}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Speed (mph)</div>
                    <div className="text-blue-800 font-semibold">{current.wind_mph}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Chill (°C)</div>
                    <div className="text-blue-800 font-semibold">{current.windchill_c}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="text-blue-600 text-sm font-medium">Wind Chill (°F)</div>
                    <div className="text-blue-800 font-semibold">{current.windchill_f}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg">
            <div className="inline-block bg-blue-100 p-5 rounded-full mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Search for Weather Information</h3>
            <p className="text-blue-600 max-w-md mx-auto">Enter a location above to get detailed weather information</p>
          </div>
        )}
        
        <footer className="mt-12 text-center text-blue-600 text-sm">
          <p style={{color:"blue",font:"900"}}>Powered by Afnan Mafat• {new Date().getFullYear()} Weather Dashboard</p>
        </footer>
      </div>
    </div>
  );
}