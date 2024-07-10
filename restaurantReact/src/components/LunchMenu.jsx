// Lunch Menu
// Will display Lunch Items in the menu component
// review mapping and naming of elements

const lunchMenu = [
  {
    name: "Pizza Vibez",
    description: "Pepperoni",
    price: "14",
  },
  {
    name: "Chicken Vibez",
    description: "Chicken Sandwich",
    price: "12",
  },
  {
    name: "Red Meat Vibez",
    description: "Steak Burger",
    price: "12",
  },
  {
    name: "Fish Vibez",
    description: "Salmon over Risotto",
    price: "15",
  },
  {
    name: "Dip Vibez",
    description: "Cajun Crab Dip",
    price: "8",
  },
];

export default function LunchMenu() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 className="menu-header">
        <header>Lunch</header>
        <header>Vibez</header>
      </h3>

      <section>
        <ul className="menu-list-display" onSubmit={handleSubmit}>
          {lunchMenu.map((i) => (
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
