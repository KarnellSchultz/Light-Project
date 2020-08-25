import { useState, useEffect } from "react";

export function useGeo(userPermission) {
  const [permission, setpermission] = useState(userPermission);
  const [position, setPosition] = useState({
    latitude: "",
    longitude: "",
  });
  const [status, setStatus] = useState("");
  function permissionToggle() {
    setpermission((state) => !state);
  }

  function success(locationData) {
    const latitudeData = locationData.coords.latitude;
    const longitudeData = locationData.coords.longitude;
    setPosition({ latitude: latitudeData, longitude: longitudeData });
    setStatus("Success");
  }
  function error() {
    setStatus("🤦‍♀️Fuck, there was an error");
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      return setStatus("Geoloacation is not supported by your browser");
    }

    if (!permission) {
      return setStatus("Permissions required");
    }
    if (permission) {
      setStatus("🕵️‍♀️ Loading . . . ");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [permission]);
  return [
    position.longitude,
    position.latitude,
    status,
    permissionToggle,
    permission,
  ];
}
