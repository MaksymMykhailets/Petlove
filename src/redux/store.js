import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./users/slice";
import { newsReducer } from "./news/slice";
import { noticesReducer } from "./notices/slice";
import { filtersReducer } from "./filters/slice";
import { citiesReducer } from "./cities/slice";

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

const newsPersistConfig = {
  key: "news",
  storage,
  whitelist: ["currentPage", "searchQuery"],
};

const noticesPersistConfig = {
  key: "notices",
  storage,
  whitelist: ["currentPage", "searchQuery", "favorites"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["searchQuery", "category", "gender", "type", "location"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    notices: persistReducer(noticesPersistConfig, noticesReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    cities: citiesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);