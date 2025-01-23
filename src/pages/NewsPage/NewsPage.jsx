import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import {
  selectNews,
  selectIsLoading,
  selectError,
  selectTotalPages,
} from "../../redux/news/selectors";
import { setCurrentPage, setSearchQuery } from "../../redux/news/slice";
import SearchField from "../../components/SearchField/SearchField";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import css from "./NewsPage.module.css";
import Title from "../../components/Title/Title";

const NewsPage = () => {
  const dispatch = useDispatch();

  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector((state) => state.news.currentPage);
  const searchQuery = useSelector((state) => state.news.searchQuery);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, perPage: 6, searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  const handleSearchSubmit = (query) => {
    dispatch(setSearchQuery(query));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={css.container}>
      <div className={css.searchWrapper}>
        <Title title="News" />
        <SearchField onSubmit={handleSearchSubmit} initialQuery={searchQuery}/>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {news.length === 0 && !isLoading && !error && (
        <p className={css.noResults}>No results found for &quot;{searchQuery}&quot;.</p>
      )}
      {news.length > 0 && <NewsList news={news} />}
      {totalPages > 1 && news.length > 0 && (
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