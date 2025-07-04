import { createSlice } from '@reduxjs/toolkit';
import { TOKEN, token } from 'src/constants/storage';
import { authApi } from '../services/users';

export interface IAuthState {
  token?: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  token: token || '',
  isAuthenticated: token ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.isAuthenticated = false;

      localStorage.removeItem(TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginConfig.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        localStorage.setItem(TOKEN, JSON.stringify(action.payload.token));
      }
    );
    // .addMatcher(authApi.endpoints.getMe.matchFulfilled, (state, action) => {
    //   state.userInfo = action.payload;
    //   localStorage.setItem(PROFILE, JSON.stringify(action.payload));
    // });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
