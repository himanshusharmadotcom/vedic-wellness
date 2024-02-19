import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isLoggedIn: false
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
        state.currentUser = action.payload;
        state.isLoggedIn = true;
    },
    loggedOutUser: (state, action) => {
        state.currentUser = null;
        state.isLoggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loggedInUser, loggedOutUser } = counterSlice.actions

export default counterSlice.reducer