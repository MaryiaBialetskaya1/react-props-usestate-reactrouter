import style from "./SimpleOnlineStore.module.css";

export function SimpleOnlineStore({ onlineStore }) {
  return (
    <div>
      <div className={style.products}>
        {onlineStore.map((element) => {
          const { id, name, price, image } = element;
          return (
            <div key={id} className={style.productCard}>
              <img src={image} alt="store items" width="400px" height="500px" />
              <div>
                <h3>{name}</h3>
                <h4>$ {price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
