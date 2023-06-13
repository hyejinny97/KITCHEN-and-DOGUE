import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpened: false
  },
  reducers: {
    sidebarOpen(state, action) {
      state.isOpened = true;
    },
    sidebarClose(state, action) {
      state.isOpened = false;
    }
  }
})

export { sidebarSlice };
export const { sidebarOpen, sidebarClose } = sidebarSlice.actions;