// Dinner Menu Component
// Make sure to review any spellings and data
// review mapping and naming of elements
// Will display dinner Items in the menu component

const dinnerMenu = [
  {
    name: "Pasta Vibez",
    description: "Spagetti and MeatBalls",
    price: "18",
  },
  {
    name: "Lamb Vibez",
    description: "Lamb Chops over Red potatoes ",
    price: "20",
  },
  {
    name: "Lobster Vibez",
    description: "Crab stuffed Lobster",
    price: "35",
  },
  {
    name: "Crab Vibez",
    description: "Crab Cake over cocunut rice",
    price: "28",
  },
  {
    name: "Cheese Vibez",
    description: "Seafood Mac and Cheese",
    price: "32",
  },
];

export default function DinnerMenu() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3 className="menu-header">
        <header>Dinner</header>
        <header>Vibez</header>
      </h3>

      <section>
        <ul className="menu-list-display" onSubmit={handleSubmit}>
          {dinnerMenu.map((i) => (
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
