import { useState } from "react";

const lunchMenu = [
  {
    name: "Pizza",
    description: "Pepperoni",
    price: "10",
  },
  {
    name: "Beans",
    description: "Pepperoni",
    price: "10",
  },
  {
    name: "Cheese",
    description: "Pepperoni",
    price: "10",
  },
  {
    name: "Ice Cream",
    description: "Pepperoni",
    price: "10",
  },
];

export default function LunchMenu() {
  return (
    <>
      <h3>
        <header>Lunch</header>
        <header>Vibez</header>
      </h3>

      <article>
        <ul className="l">
          {lunchMenu.map((i) => (
            <li key={i.name}>{i.name}</li>
          ))}
        </ul>
      </article>
    </>
  );
}
