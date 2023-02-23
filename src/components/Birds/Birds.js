import { useState } from "react";
import { dataBirds } from "../../data";

export function Birds() {
  const [birds] = useState(dataBirds);

  return (
    <div>
      <h1>BIRDS</h1>
      {birds.map((item) => {
        const { id, image } = item;
        return (
          <div key={id}>
            <h1>{id}</h1>
            <img src={image} alt="birds" />
          </div>
        );
      })}
    </div>
  );
}
