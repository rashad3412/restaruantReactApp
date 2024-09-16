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
          MeezVibez is the ultimate destination for anyone looking to elevate
          their dining experience. The name reflects the essence of finding your
          perfect vibe—whether its you or me, we’re all about creating the right
          atmosphere. Our menu is a celebration of farm-to-table freshness and
          local ingredients, each dish crafted with a unique twist to satisfy
          your cravings and match your mood. At MeezVibez, we turn every meal
          into a flavorful journey that resonates with your taste and vibe.
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
