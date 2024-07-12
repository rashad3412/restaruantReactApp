const eventVibez = [
  {
    name: "Trivia Vibez",
    time: "8:00pm",
    day: "Monday",
  },
  {
    name: "Military Vibez",
    time: "7:00pm",
    day: "Tuesday",
  },
  {
    name: "Wing Vibez",
    time: "6:00pm",
    day: "Wedensday",
  },
  {
    name: "R&B Vibez",
    time: "5:00pm",
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
                <div>{i.day}</div>
                <div>{i.time}</div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
