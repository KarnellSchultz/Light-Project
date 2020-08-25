import { useState, useEffect } from "react";

export function useDarkSkyEndpoint(longitude, latitude) {
  let initURL = "http://localhost:9000/weather/";
  const [darkSkyData, setDarkSkyData] = useState({
    longitude,
    latitude,
  });

  useEffect(() => {
    fetch(`${initURL}`)
      .then((response) => response.text())
      .then((data) => setDarkSkyData(data));
    console.log(darkSkyData);
  }, [darkSkyData]);

  return [darkSkyData, setDarkSkyData];
}
