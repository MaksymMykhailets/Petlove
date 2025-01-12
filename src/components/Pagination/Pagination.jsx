import PropTypes from "prop-types";
import css from "./Pagination.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handleLastPage = () => onPageChange(totalPages);
  const handlePreviousPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);

  const renderPages = () => {
    const pages = new Set();
  
    if (totalPages > 5) {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pages.add(i);
        }
        pages.add("...");
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.add(1);
        pages.add("...");
        pages.add(currentPage - 1);
        pages.add(currentPage);
        pages.add(currentPage + 1);
        pages.add("...");
      } else {
        pages.add(1);
        pages.add("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.add(i);
        }
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.add(i);
      }
    }
  
    return Array.from(pages);
  };

  return (
    <div className={css.pagination}>
    <div className={css.flipWrapper}>
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        className={css.buttonFlip}
      >
        <FaAnglesLeft/>
      </button>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={css.buttonFlip}
      >
        <FaAngleLeft/>
      </button>
    </div>
    <div className={css.pagesWrapper}>
    {renderPages().map((page, index) =>
      page === "..." ? (
        <span key={`ellipsis-${index}`} className={css.ellipsis}>
          ...
        </span>
      ) : (
        <button
          key={`page-${page}`}
          onClick={() => onPageChange(page)}
          className={`${css.button} ${
            page === currentPage ? css.active : ""
          }`}
        >
          {page}
        </button>
      )
    )}
    </div>
      <div className={css.flipWrapper}>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={css.buttonFlip}
      >
        <FaAngleRight />
      </button>
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        className={css.buttonFlip}
      >
        <FaAnglesRight />
      </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;