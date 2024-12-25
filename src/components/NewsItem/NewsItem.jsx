import PropTypes from "prop-types";
import css from "./NewsItem.module.css";

const NewsItem = ({ item }) => {
  const { imgUrl, title, text, date, url } = item;

  return (
    <li className={css.item}>
      <img src={imgUrl} alt={title} className={css.image} />
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
      <div className={css.wrapper}>
      <p className={css.date}>{new Date(date).toLocaleDateString()}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className={css.link}>
        Read more
      </a>
      </div>
    </li>
  );
};

NewsItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default NewsItem;