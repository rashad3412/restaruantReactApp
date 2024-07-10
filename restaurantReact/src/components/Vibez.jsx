const eventVibez = [
  {
    name: "Trivia Night",
    time: "8:00pm",
    day: "Monday",
  },
  {
    name: "50 cent wings",
    time: "8:00pm",
    day: "Tuesday",
  },
  {
    name: "Military Night",
    time: "8:00pm",
    day: "Wedensday",
  },
  {
    name: "R&B Night",
    time: "8:00pm",
    day: "Friday",
  },
];

console.log(eventVibez);

export default function Vibez() {
  return (
    <>
      <section className="vibez-grid-container">
        <h2>
          <header>Event</header>
          <header>Vibez</header>
        </h2>
        <article>
          <ul>
            {eventVibez.map((i) => (
              <li key={i.name}>
                <div>{i.name}</div>
                <div>{i.time}</div>
                <div>{i.day}</div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
