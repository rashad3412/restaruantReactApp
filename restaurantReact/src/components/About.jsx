// About Page
// Should have an description and images with address

export default function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <article className="about-article" onSubmit={handleSubmit}>
        <p>
          MeezVibez is a speacial setting for everyone. The name represents a
          you or a me wanting to get a vibe. Our menu is designed to cater to
          the vibezz of your stomach with farm to table and local fresh
          ingridents with a unique twist.
        </p>

        <section className="about-section" onSubmit={handleSubmit}>
          <img
            src="../assets/./img1.jpg"
            alt=""
            width={"200px"}
            height={"300px"}
          />
          <img
            src="../assets/./img3.jpg"
            alt=""
            width={"200px"}
            height={"200px"}
          />

          <img
            src="../assets/./img2.jpg"
            alt=""
            width={"200px"}
            height={"200px"}
          />

          <img
            src="../assets/./img4.jpg"
            alt=""
            width={"200px"}
            height={"300px"}
          />

          <address>123 Main Street</address>
        </section>
      </article>
    </>
  );
}
