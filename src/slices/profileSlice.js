// import {createSlice} from "@reduxjs/toolkit"

// const initialState = {
//     user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
//     loading: false,
// };

// const profileSlice = createSlice({
//     name:"profile",
//     initialState: initialState,
//     reducers: {
//         setUser(state, value) {
//             state.user = value.payload;
//         },
//         setLoading(state, value) {
//             state.loading = value.payload;
//           },
//     },
// });

// export const {setUser, setLoading} = profileSlice.actions;
// export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
    return null;
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
