import React from "react";

const LocationContext = React.createContext();
const LocationDispatchContext = React.createContext();

function locationReducer(state, action) {
  switch (action.type) {
    case "update":
      let tempLon = action.payload.lon;
      let tempLat = action.payload.lat;
      return { lat: tempLat, lon: tempLon };
    case "clear":
      return { lat: 0, lon: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function LocationProvider({ children }) {
  const [state, dispatch] = React.useReducer(locationReducer, {
    lat: null,
    lon: null,
  });

  return (
    <LocationContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  );
}

function useLocationState() {
  const context = React.useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      `useLocationState must be used within a LocationProvicer 🚧`
    );
  }
  return context;
}

function useLocationDispatch() {
  const context = React.useContext(LocationDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useLocationDisplat must be used within a LocationProvider fam 🚧`
    );
  }
  return context;
}

export { LocationProvider, useLocationDispatch, useLocationState };
