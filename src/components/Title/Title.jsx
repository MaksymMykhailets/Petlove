import PropTypes from "prop-types";
import css from "./Title.module.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className={css.titleBlock}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.subtitle}>{subtitle}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Title;