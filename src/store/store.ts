import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: { themeSlice },
});

export type RootType = () => ReturnType<typeof store.getState>;
