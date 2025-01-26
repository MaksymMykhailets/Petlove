import { createSelector } from "@reduxjs/toolkit";
import { selectCategories, selectSexOptions, selectSpecies, selectNotices } from "../notices/selectors";
import { selectCityLocations } from "../cities/selectors";

export const selectFilters = (state) => state.filters;
export const selectSearchQuery = (state) => state.filters.searchQuery;
export const selectCategory = (state) => state.filters.category;
export const selectGender = (state) => state.filters.gender;
export const selectType = (state) => state.filters.type;
export const selectLocation = (state) => state.filters.location;

export const selectAvailableCategories = createSelector(
  [selectCategories],
  (categories) => categories || []
);

export const selectAvailableSexOptions = createSelector(
  [selectSexOptions],
  (sexOptions) => sexOptions || []
);

export const selectAvailableSpecies = createSelector(
  [selectSpecies],
  (species) => species || []
);

export const selectAvailableLocations = createSelector(
  [selectCityLocations],
  (locations) => locations || []
);

export const selectFilteredNoticesWithFilters = createSelector(
  [selectNotices, selectFilters],
  (notices, filters) => {
    const { searchQuery, category, gender, type, location } = filters;

    return notices.filter((notice) => {
      const matchesSearchQuery =
        !searchQuery ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.comment.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !category || notice.category === category;
      const matchesGender = !gender || notice.sex === gender;
      const matchesType = !type || notice.species === type;
      const matchesLocation = !location || notice.location === location;

      return (
        matchesSearchQuery &&
        matchesCategory &&
        matchesGender &&
        matchesType &&
        matchesLocation
      );
    });
  }
);