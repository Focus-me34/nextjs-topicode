import { createSlice } from "@reduxjs/toolkit";
// import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

// ! Initial state
const initialState = {
  topics: [],
  notification: { status: "success", title: "Success", message: "Successfully set up the topic slice!", flash_code: "GENERAL_SUCCESS", slice: "topics" }, // ? OBJECT
};

// ! Actual Slice
export const topicSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {

    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  // extraReducers: {
    //   [HYDRATE]: (state, action) => {
      //     return {
        //       ...state,
        //       ...action.payload.auth,
        //     };
        //   },
        // },
});

// export const getAllTopics = () => {
//   return async (dispatch) => {
//     dispatch(topicSlice.actions.showNotifications({ status: "pending", title: "Sending...", message: `Fetching all topics. Please wait...`, flash_code: null, slice: "topics" }));

//     const sendRequest = async () => {
//       const res = await fetch("http://firebase-to-do-here/", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!res.ok) {
//         throw new Error(`An error occured: Failed to fetch all redemptions for this organization: ${organizationName}...`);
//       }

//       const data = await res.json();
//       return [data, res];
//     };

//     try {
//       const [data, res] = await sendRequest();
//       console.log(data);

//       if (data.error) {
//         throw new Error(`${data.error}`);
//       }

//       // if ((!!res.headers.get("authorization")?.split(" ")[1] === false) && (!!data.error === true)) {
//       //   // ! If we can't split the token string and we have a data.error message, then we throw a new error based on the message returned from backend
//       //   throw new Error(`${data.error}`);
//       // }

//       dispatch(topicSlice.actions.setAllTopics({ allTopics: data.topics }));
//       dispatch(topicSlice.actions.showNotifications({ status: "success", title: "Success", message: `Successfully fetched all redemptions` }));
//     } catch (error) {
//       console.log(error);
//       dispatch(topicSlice.actions.showNotifications({ status: "error", title: "Error", message: error.message }));
//     }
//   };
// }

export default topicSlice.reducer;

// export const { setAuthState } = authSlice.actions;

// export const selectAuthState = (state) => state.auth.authState;
