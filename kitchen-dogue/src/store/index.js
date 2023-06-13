import { configureStore } from '@reduxjs/toolkit';
import { sidebarSlice } from './slices/sidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  }
});

export { store };
export { sidebarOpen, sidebarClose } from './slices/sidebarSlice';