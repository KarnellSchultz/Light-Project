import React from "react";

const LocationContext = React.createContext();
const LocationDispatchContext = React.createContext();

function locationReducer(state, action) {
  switch (action.type) {
    case "update":
      return { lat: 33.3, lon: 48.4 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function LocationProvider({ children }) {
  const [state, dispatch] = React.useReducer(locationReducer, { lat, lon });

  return (
    <LocationContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  );
}
export { LocationProvider };
