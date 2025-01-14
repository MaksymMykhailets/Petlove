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

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);