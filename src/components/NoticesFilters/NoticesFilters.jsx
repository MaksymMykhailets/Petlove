import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  fetchNoticeCategories,
  fetchNoticeSexOptions,
  fetchNoticeSpecies,
} from "../../redux/notices/operations";
import { fetchCityLocations } from "../../redux/cities/operations";
import {
  selectAvailableCategories,
  selectAvailableSexOptions,
  selectAvailableSpecies,
  selectAvailableLocations,
} from "../../redux/filters/selectors";
import {
  setSearchQuery,
  setCategory,
  setGender,
  setType,
  setLocation,
  resetFilters,
} from "../../redux/filters/slice";
import SearchField from "../SearchField/SearchField";
import css from "./NoticesFilters.module.css";
import selectStyles from "./selectStyles";

const NoticesFilters = ({ onFilterChange }) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAvailableCategories);
  const sexOptions = useSelector(selectAvailableSexOptions);
  const species = useSelector(selectAvailableSpecies);
  const locations = useSelector(selectAvailableLocations);

  const filters = useSelector((state) => state.filters);

  const [categoryValue, setCategoryValue] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);

  const addShowAllOption = (options) => [
    { value: "", label: "Show all" },
    ...options,
  ];

  useEffect(() => {
    dispatch(fetchNoticeCategories());
    dispatch(fetchNoticeSexOptions());
    dispatch(fetchNoticeSpecies());
    dispatch(fetchCityLocations());
  }, [dispatch]);

  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
    onFilterChange();
  };

  const handleCategoryChange = (selectedOption) => {
    setCategoryValue(selectedOption);
    dispatch(setCategory(selectedOption?.value || ""));
    onFilterChange();
  };

  const handleGenderChange = (selectedOption) => {
    setGenderValue(selectedOption);
    dispatch(setGender(selectedOption?.value || ""));
    onFilterChange();
  };

  const handleTypeChange = (selectedOption) => {
    setTypeValue(selectedOption);
    dispatch(setType(selectedOption?.value || ""));
    onFilterChange();
  };

  const handleLocationChange = (selectedOption) => {
    setLocationValue(selectedOption);
    dispatch(setLocation(selectedOption?.value || ""));
    onFilterChange();
  };

  const handleReset = () => {
    console.log("Reset button clicked");
    setCategoryValue(null);
    setGenderValue(null);
    setTypeValue(null);
    setLocationValue(null);
    dispatch(resetFilters());
    onFilterChange();
  };

  return (
    <div className={css.filters}>
      <div className={css.row}>
        <div className={css.first}>
          <SearchField
            onSubmit={handleSearchChange}
            initialQuery={filters.searchQuery}
          />
        </div>
        <div className={css.second}>
          <Select
            value={categoryValue}
            options={addShowAllOption(
              categories.map((category) => ({
                value: category,
                label: category,
              }))
            )}
            onChange={handleCategoryChange}
            placeholder="Category"
            styles={selectStyles}
          />
        </div>
        <div className={css.third}>
          <Select
            value={genderValue}
            options={addShowAllOption(
              sexOptions.map((sex) => ({
                value: sex,
                label: sex,
              }))
            )}
            onChange={handleGenderChange}
            placeholder="By gender"
            styles={selectStyles}
          />
        </div>
        <div className={css.fourth}>
          <Select
            value={typeValue}
            options={addShowAllOption(
              species.map((type) => ({
                value: type,
                label: type,
              }))
            )}
            onChange={handleTypeChange}
            placeholder="By type"
            styles={selectStyles}
          />
        </div>
        <div className={css.fifth}>
          <Select
            value={locationValue}
            options={addShowAllOption(
              locations.map((location) => ({
                value: location.cityEn,
                label: location.cityEn,
              }))
            )}
            onChange={handleLocationChange}
            placeholder="Location"
            styles={selectStyles}
          />
        </div>
      </div>
      <hr className={css.hr} />
      <div className={css.sorting}>
        <label>
          <input
            type="radio"
            name="sort"
            value="popular"
            onChange={() => onFilterChange("popular")}
          />
          Popular
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="unpopular"
            onChange={() => onFilterChange("unpopular")}
          />
          Unpopular
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="cheap"
            onChange={() => onFilterChange("cheap")}
          />
          Cheap
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="expensive"
            onChange={() => onFilterChange("expensive")}
          />
          Expensive
        </label>
      </div>
      <button className={css.resetButton} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

NoticesFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default NoticesFilters;