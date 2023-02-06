import React from "react";

const Fruits = ({ favFruits }) => {
  return (
    <>
      <p>Мои любимые фрукты:</p>
      <ul>
        {favFruits.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </>
  );
};

export default Fruits;
