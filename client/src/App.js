import React, { useEffect } from "react";
import { useGeo } from "./Hooks/useGeo";
import { useDarkSkyEndpoint } from "./Hooks/useDarkSkyEndpoint";

import { useLocationDispatch, useLocationState } from "./location-context";

function App() {
  const [geoState, setStatus, status, loading] = useGeo();

  // const [data, setData] = useDarkSkyEndpoint(longitude, latitude);

  let locationContextState = useLocationState();
  let locationDispatch = useLocationDispatch();
  useEffect(() => {
    if (status === "SUCCESS") {
      locationDispatch({
        type: "update",
        payload: {
          lat: geoState.latitude,
          lon: geoState.longitude,
        },
      });
    }
  }, [status]);

  return (
    <div>
      <header>
        <h1>{`Locate data stuff going here`}</h1>
      </header>
      <button
        // disabled={permission}
        onClick={(e) => {
          e.preventDefault();
          setStatus("LOADING");
        }}
      >
        {`Geolocate Me`}
      </button>
      <h4>{`Status: ${status}`}</h4>
      {/* <p>{`${longitude} & ${latitude}`}</p> */}
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        💣CLEAR💣
      </button>
      <h4>Lat:{locationContextState.lat}</h4>
      <h4>Lon:{locationContextState.lon}</h4>
    </div>
  );
}

export default App;
