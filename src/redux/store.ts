import {configureStore} from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
