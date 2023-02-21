import style from "./Buttons.module.css";
export function Buttons() {
  return (
    <div className={style.cont}>
      <button className={style.change}>Dresses</button>
      <button className={style.change}>Shirts</button>
      <button className={style.change}>Skirts</button>
      <button className={style.change}>Pants</button>
      <button className={style.change}>Shoes</button>
    </div>
  );
}
