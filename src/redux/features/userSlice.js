import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ! SLICE CREATION
const userSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
    userToShow: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload.users;
    },
  },

  // ! EXTRA REDUCERS FOR ASYNC THUNKS (FETCHING DATA) - https://redux.js.org/tutorials/essentials/part-5-async-logic#extra-reducers-for-pendingfulfilledrejected-actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchSingleUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userToShow = action.payload;
      })
      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// ! ACTION CREATORS / ASYNC THUNKS - https://redux.js.org/tutorials/essentials/part-5-async-logic#action-creators

// * FETCH ALL USERS (INDEX)
export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch all users...');
    }
    const data = await response.json();
    if (data.error) { throw new Error(data.error); }

    return data;
  }
);

// * FETCH SINGLE USER (SHOW)
export const fetchSingleUser = createAsyncThunk(
  "user/fetchSingleUser",
  async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) { throw new Error('Failed to fetch all users...'); }

    const data = await response.json();
    if (data.error) { throw new Error(data.error); }

    return data;
  }
);


export const { setAllUsers } = userSlice.actions;
export default userSlice.reducer;
