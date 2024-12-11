import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
    <div className={css.homePage}>
      <div className={css.content}>
        <h1 className={css.title}>
          Take good <span className={css.highlight}>care</span> of your small
          pets
        </h1>
        <p className={css.description}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
    </div>
      <div className={css.image}></div>
    </>
  );
};

export default HomePage;
