import { useState, useEffect } from "react";

export function useDarkSkyEndpoint(longitude, latitude) {
  let initURL = "http://localhost:9000/weather";
  const [darkSkyData, setDarkSkyData] = useState({
    longitude,
    latitude,
  });

  function trimCoordinates(tempNumber) {
    let numberString = tempNumber.toString();
    let trimmedNumber = Number(numberString.slice(0, 6));
    return trimmedNumber;
  }
  useEffect(() => {
    if (longitude && latitude) {
      fetch(
        `${initURL}/${trimCoordinates(longitude)}/${trimCoordinates(latitude)}`
      )
        .then((response) => response.json())
        .then((json) => setDarkSkyData(json));
    }
  }, [initURL, latitude, longitude]);

  return [darkSkyData, setDarkSkyData];
}
