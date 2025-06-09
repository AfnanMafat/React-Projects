import React, { useEffect } from "react";
import axios from "axios";

export default function SearchBar() {
  const [country, setCountry] = React.useState("");
  const [location, setLocation] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  const [visible,setVisible] = React.useState(false)

  const HandleSubmit = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?q=${country}&key=4b27c39828de4927862151749250906`
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
    <>
      <div>
        <input
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          placeholder="Enter Country Name"
        />
        <input
          type="submit"
          onClick={HandleSubmit}
          value={"Get Weather Details"}
        />
      </div>

      {visible ? <div>
        <h1>Here Weather Details : </h1>
        <p>{location.name}</p>
        <p>{location.region}</p>
        <p>{location.country}</p>
        <p>{location.lat}</p>
        <p>{location.lon}</p>
        <p>{location.tz_id}</p>
        <p>{current.last_updated}</p>
        <p>{current.text}</p>
        <p>{current.dewpoint_c}</p>
        <p>{current.dewpoint_f}</p>
        <p>{current.feelslike_c}</p>
        <p>{current.feelslike_f}</p>
        <p>{current.gust_kph}</p>
        <p>{current.gust_mph}</p>
        <p>{current.heatindex_c}</p>
        <p>{current.heatindex_f}</p>
        <p>{current.precip_in}</p>
        <p>{current.precip_mm}</p>
        <p>{current.pressure_in}</p>
        <p>{current.pressure_mb}</p>
        <p>{current.temp_c}</p>
        <p>{current.temp_f}</p>
        <p>{current.uv}</p>
        <p>{current.vis_km}</p>
        <p>{current.wind_degree}</p>
        <p>{current.wind_dir}</p>
        <p>{current.wind_kph}</p>
        <p>{current.wind_mph}</p>
        <p>{current.windchill_c}</p>
        <p>{current.windchill_f}</p>
      </div> : null}

      
    </>
  );
}
