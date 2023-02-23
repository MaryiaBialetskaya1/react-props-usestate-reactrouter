import { storeData } from "../../data";
import { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { SimpleOnlineStore } from "../SimpleOnlineStore/SimpleOnlineStore";

export function Home() {
  const [store, setStore] = useState(storeData);

  const filteredCloth = (searchTerm) => {
    const newFilterCloth = storeData.filter(
      (element) => element.searchTerm === searchTerm
    );
    setStore(newFilterCloth);
  };
  return (
    <div>
      <Buttons filteredCloth={filteredCloth} />
      <SimpleOnlineStore onlineStore={store} />
    </div>
  );
}
