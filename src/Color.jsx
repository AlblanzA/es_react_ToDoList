import React from "react";


function Color ({ color }) => {
  return <li>{color.name}</li>;
};


function Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

const App = () => {
  const colorArray = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 3, name: "Green" },
  ];

  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
};

export default App;
