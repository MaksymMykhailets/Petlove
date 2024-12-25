import PropTypes from "prop-types";
import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={css.list}>
      {news.map((item) => (
        <NewsItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;