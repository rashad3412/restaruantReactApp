import DessertMenu from "./Dessert";
import DinnerMenu from "./Dinner";
import LunchMenu from "./LunchMenu";

export default function Menu() {
  return (
    <>
      <header className="menu-header">
        <h2>
          <div>Menu</div>
          <div>Vibez</div>
        </h2>
      </header>
      <section className="menu-items">
        <div className="items"> {<LunchMenu />} </div>
        <div className="items">{<DinnerMenu />}</div>
        <div className="items">{<DessertMenu />}</div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
