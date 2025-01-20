import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import css from "./SearchField.module.css";

const SearchField = ({ onSubmit, initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    onSubmit("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className={css.input}
      />
      <div className={css.icons}>
        {query && <RxCross2 className={css.clearIcon} onClick={handleClear} />}
        <LuSearch className={css.searchIcon} onClick={handleSubmit} />
      </div>
    </form>
  );
};

SearchField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialQuery: PropTypes.string,
};

export default SearchField;