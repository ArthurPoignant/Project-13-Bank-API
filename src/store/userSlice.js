import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, signup, getUserInfo, updateUserNameAPI } from '../api/api';

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const data = await loginUser(email, password);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signupUser = createAsyncThunk('user/signup', async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
  try {
    const data = await signup(email, password, firstName, lastName);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (token, { rejectWithValue }) => {
  try {
    const data = await getUserInfo(token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateUserName = createAsyncThunk('user/updateName', async ({ token, profileData }, { rejectWithValue }) => {
  try {
    const data = await updateUserNameAPI(token, profileData);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateUserName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          ...action.payload,
        };
        state.loading = false;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

