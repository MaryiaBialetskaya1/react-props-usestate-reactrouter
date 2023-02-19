import style from "./SimpleOnlineStore.module.css";

export function SimpleOnlineStore({ onlineStore }) {
  return (
    <div className={style.products}>
      {onlineStore.map((element) => {
        const { id, name, searchTerm, price, image } = element;
        return (
          <div key={id} className={style.productCard}>
            <img src={image} alt="store items" width="400px" height="500px" />
            <div className={style.}>
              <h3>{name}</h3>
              <h4> {searchTerm}</h4>
              <h4>$ {price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
