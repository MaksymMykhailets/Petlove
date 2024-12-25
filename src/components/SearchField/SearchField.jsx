import { useState } from "react";
import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import css from "./SearchField.module.css";

const SearchField = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

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
      {query ? (
          <RxCross2 className={css.clearIcon} onClick={handleClear} />
      ) : (
        <LuSearch className={css.searchIcon} />
      )}
    </form>
  );
};

SearchField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchField;