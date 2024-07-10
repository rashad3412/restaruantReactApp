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
    price: "10",
  },
  {
    name: "Custard Vibez",
    description: "Creme Brulee",
    price: "10",
  },
];

export default function DessertMenu() {
  return (
    <>
      <h3>
        <header>Sweet</header>
        <header>Vibez</header>
      </h3>

      <article>
        <ul className="menu-list-display">
          {dessertMenu.map((i) => (
            <li key={i.name}>
              <article className="menu-list-gap">{i.name}</article>
              {i.description} <span>${i.price}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
