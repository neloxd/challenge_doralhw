import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import {UserState} from '@app/types/components/User';

export const USER = 'user';

export const userSlice = createSlice<
  UserState,
  SliceCaseReducers<UserState>,
  string
>({
  name: USER,
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {setCurrentUser} = userSlice.actions;

export default userSlice.reducer;
