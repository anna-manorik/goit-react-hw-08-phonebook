import { createReducer, createSlice } from '@reduxjs/toolkit';
import actions from './phonebook-action';
// import { contactsApi } from './phonebookApi';

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       contactsApi.endpoints.addContact.matchFulfilled,
//       (state, { payload }) => {
//         [...state, payload];
//       },
//     ),
//     builder.addMatcher(
//       contactsApi.endpoints.deleteContact.matchFulfilled,
//       (state, { payload }) => state.filter(({ id }) => id !== payload),
//     )
//   },
// });

// export default contactsSlice.reducer;
