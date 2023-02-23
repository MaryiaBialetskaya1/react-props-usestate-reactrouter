import { useState } from "react";
import { dataDogs } from "../../data";

export function Dogs() {
  const [dogs] = useState(dataDogs);
  return (
    <div>
      <h1>DOGS</h1>
      {dogs.map((item) => {
        const { id, image } = item;
        return (
          <div key={id}>
            <h1>{id}</h1>
            <img src={image} alt="dogs" />
          </div>
        );
      })}
    </div>
  );
}
