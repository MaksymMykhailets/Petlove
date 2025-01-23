import { createSelector } from "@reduxjs/toolkit";
import { selectCategories, selectSexOptions, selectSpecies, selectNotices } from "../notices/selectors";
import { selectCityLocations } from "../cities/selectors";

export const selectFilters = (state) => state.filters;

// Селектор для категорій, заснованих на даних із notices
export const selectAvailableCategories = createSelector(
  [selectCategories],
  (categories) => categories || []
);

// Селектор для статей, заснованих на даних із notices
export const selectAvailableSexOptions = createSelector(
  [selectSexOptions],
  (sexOptions) => sexOptions || []
);

// Селектор для видів (species), заснованих на даних із notices
export const selectAvailableSpecies = createSelector(
  [selectSpecies],
  (species) => species || []
);

// Селектор для локацій, заснованих на даних із cities
export const selectAvailableLocations = createSelector(
  [selectCityLocations],
  (locations) => locations || []
);

// Поєднання фільтрів із доступними опціями
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