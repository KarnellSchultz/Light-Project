import React from "react";

function App() {
  return (
    <div className="">
      <header>
        <h1>{`Locate data stuff going here`}</h1>
      </header>
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch("http://localhost:9000/weather")
            .then((response) => response.text())
            .then((data) => console.log(data));
        }}
      >
        {`Geolocate Me`}
      </button>
    </div>
  );
}

export default App;
