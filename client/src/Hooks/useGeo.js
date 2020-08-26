import { useEffect, useState } from "react";

function useGeo(init) {
  const [geoState, setGeoState] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geoloacation is not supported by your browser");
    } else if (status === "LOADING") {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [status]);

  function success(position) {
    const latitude = trimCoordinates(position.coords.latitude);
    const longitude = trimCoordinates(position.coords.longitude);
    console.log(latitude, longitude);
    setGeoState({ latitude: latitude, longitude: longitude });
    setStatus("SUCCESS");
    setLoading(false);
  }

  function error() {
    setStatus("🚧 There was an Error fam 🚧");
    setLoading(false);
  }

  return [geoState, setStatus, status, loading];
}
function trimCoordinates(tempNumber) {
  console.log("trimming:", tempNumber);
  debugger;
  let trimmedNumber = null;
  if (tempNumber !== Number) {
    return;
  } else {
    let numberString = tempNumber.toString();
    trimmedNumber = Number(numberString.slice(0, 6));
  }
  console.log(trimmedNumber);
}

export { useGeo };
