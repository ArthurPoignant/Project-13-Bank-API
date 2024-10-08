import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, getUserInfo, updateUserNameAPI } from '../api/api';

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const data = await loginUser(email, password);
    localStorage.setItem('token', data.body.token);
    return { user: data.user, token: data.body.token };
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (token, { rejectWithValue }) => {
  try {
    const data = await getUserInfo(token);
    sessionStorage.setItem('token', token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateUserName = createAsyncThunk('user/updateName', async ({ token, profileData }, { rejectWithValue }) => {
  try {
    const data = await updateUserNameAPI(token, profileData);
    console.log(data)
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
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

