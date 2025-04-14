import {
  createSlice,
  createAsyncThunk,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import {getCategories} from '@app/services/categories';
import {Category, CategoryState} from '@app/types/components/Category';

export const CATEGORIES = 'categories';

export const fetchCategories = createAsyncThunk(
  `${CATEGORIES}/fetchCategories`,
  async () => {
    try {
      const response = await getCategories();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const categoriesSlice = createSlice<
  CategoryState,
  SliceCaseReducers<CategoryState>,
  string
>({
  name: CATEGORIES,
  initialState: {
    categoriesList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload.filter(
          (item: Category) => !item.id.includes('promociones'),
        );
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as any;
      });
  },
});

export default categoriesSlice.reducer;
