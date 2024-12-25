import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPages,
} from "../../redux/news/selectors";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import css from "./NewsPage.module.css";

const NewsPage = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, perPage, searchQuery }));
  }, [dispatch, currentPage, perPage, searchQuery]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={css.container}>
        <div className={css.searchWrapper}>
      <h1 className={css.newsTitle}>News</h1>
      <SearchField onSubmit={handleSearchSubmit} />
        </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {news.length > 0 && <NewsList news={news} />}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default NewsPage;