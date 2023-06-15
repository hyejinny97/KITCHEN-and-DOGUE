import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { sidebarSlice } from './slices/sidebarSlice';
import { menusApi } from './apis/menusApi';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    [menusApi.reducerPath]: menusApi.reducer,
  },
  middleware(defaultMiddleware) {
    return defaultMiddleware().concat(menusApi.middleware);
  }
});

setupListeners(store.dispatch);

export { store };
export { sidebarOpen, sidebarClose } from './slices/sidebarSlice';
export { useFetchSignatureMenuQuery, useFetchDailyMenuQuery, useFetchSpecialMenuQuery } from './apis/menusApi';