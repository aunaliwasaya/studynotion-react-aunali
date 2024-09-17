// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   signupData: null,
//   loading: false,
//   token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     setSignupData(state, value) {
//       state.signupData = value.payload;
//     },
//     setLoading(state, value) {
//       state.loading = value.payload;
//     },
//     setToken(state, value) {
//       state.token = value.payload;
//     },
//   },
// });

// export const { setSignupData, setLoading, setToken } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocalStorage = () => {
  try {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error("Failed to parse token from localStorage", error);
    return null;
  }
};

const initialState = {
  signupData: null,
  loading: false,
  token: getTokenFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
