import PropTypes from "prop-types";
import css from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePreviousPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={css.pagination}>
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        className={css.button}
      >
        «
      </button>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={css.button}
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${css.button} ${
            page === currentPage ? css.active : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={css.button}
      >
        ›
      </button>
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        className={css.button}
      >
        »
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;