import { useSelector } from "react-redux";
import { selectNews } from "../../redux/news/selectors";
import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";

const NewsList = () => {
  const news = useSelector(selectNews);

  return (
    <ul className={css.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;