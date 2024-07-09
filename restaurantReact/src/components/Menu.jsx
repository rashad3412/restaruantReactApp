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
        <div> {<LunchMenu />} </div>
        <div>{<LunchMenu />}</div>
        <div>{<LunchMenu />}</div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
