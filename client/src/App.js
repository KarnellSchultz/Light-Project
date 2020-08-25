import React, { useEffect } from "react";
import { useGeo } from "./Hooks/useGeo";
import { useDarkSkyEndpoint } from "./Hooks/useDarkSkyEndpoint";

function App() {
  const [longitude, latitude, status, permissionToggle, permission] = useGeo(
    false
  );
  const [data, setData] = useDarkSkyEndpoint(longitude, latitude);

  useEffect(() => {
    if (status === "Success") {
      setData(longitude, latitude);
    }
  }, [status]);

  return (
    <div className="">
      <header>
        <h1>{`Locate data stuff going here`}</h1>
      </header>
      <button
        disabled={permission}
        onClick={(e) => {
          e.preventDefault();

          permissionToggle();
        }}
      >
        {`Geolocate Me`}
      </button>
      <h4>{`Status: ${status}`}</h4>
      <p>{`${longitude} & ${latitude}`}</p>
    </div>
  );
}

export default App;

//GET LONG AND LATT FROM BROWSER
// SEND LONG LAT TO SERVER
