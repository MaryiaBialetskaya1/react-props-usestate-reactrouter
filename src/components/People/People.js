import { useState } from "react";
import { dataPeople } from "../../data";

export function People() {
  const [people] = useState(dataPeople);

  return (
    <div className="App">
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>
              {id} - {name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
