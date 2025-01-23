import PropTypes from "prop-types";
import css from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={css.titleBlock}>
      <h1 className={css.title}>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;