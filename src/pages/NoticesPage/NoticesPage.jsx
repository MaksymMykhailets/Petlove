import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title/Title";
import NoticesList from "../../components/NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import { fetchNotices, toggleFavoriteNotice } from "../../redux/notices/operations";
import {
  selectTotalPages,
  selectCurrentPage,
} from "../../redux/notices/selectors";
import { selectFilteredNoticesWithFilters } from "../../redux/filters/selectors";
import { setCurrentPage } from "../../redux/notices/slice";
import css from "./NoticesPage.module.css";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectFilteredNoticesWithFilters);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchNotices({ page: currentPage, perPage: 6 }));
  }, [dispatch, currentPage]);

  const handleLearnMore = (id) => {
    console.log(`Fetch details for notice ID: ${id}`);
    // Додати модалку
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavoriteNotice(id));
  };

  const handleFilterChange = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchNotices({ page: 1, perPage: 6 }));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={css.container}>
      <Title title="Find your favorite pet" />
      <NoticesFilters onFilterChange={handleFilterChange} />
      <NoticesList
        notices={notices}
        onLearnMore={handleLearnMore}
        onToggleFavorite={handleToggleFavorite}
      />
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

export default NoticesPage;