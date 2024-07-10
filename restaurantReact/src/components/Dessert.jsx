// dessert Menu component
// review mapping and naming of elements
// Will display Dessert Items in the menu component

const dessertMenu = [
  {
    name: "Ice Cream Vibez",
    description: "Vanilla",
    price: "12",
  },
  {
    name: "Cookie Vibez",
    description: "Oatmenal",
    price: "8",
  },
  {
    name: "Cheese Cake Vibez",
    description: "Bannana Pudding CheeseCake",
    price: "10",
  },
  {
    name: "Tart Vibez",
    description: "Fruit Tart",
    price: "13",
  },
  {
    name: "Custard Vibez",
    description: "Creme Brulee",
    price: "9",
  },
];

export default function DessertMenu() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="menu-header">
        <header>Sweet</header>
        <header>Vibez</header>
      </h3>

      <section>
        <ul className="menu-list-display" onSubmit={handleSubmit}>
          {dessertMenu.map((i) => (
            <li key={i.name}>
              <article className="menu-list-gap">{i.name}</article>
              {i.description} <span>${i.price}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
