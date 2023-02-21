import style from "./Buttons.module.css";
export function Buttons({ filteredCloth }) {
  return (
    <div className={style.cont}>
      <button className={style.change} onClick={() => filteredCloth("dress")}>
        Dresses
      </button>
      <button className={style.change} onClick={() => filteredCloth("shirt")}>
        Shirts
      </button>
      <button className={style.change} onClick={() => filteredCloth("skirt")}>
        Skirts
      </button>
      <button className={style.change} onClick={() => filteredCloth("pants")}>
        Pants
      </button>
      <button className={style.change} onClick={() => filteredCloth("shoes")}>
        Shoes
      </button>
    </div>
  );
}
