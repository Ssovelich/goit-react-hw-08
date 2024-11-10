import { createSlice } from "@reduxjs/toolkit";
import { apiLogOut } from "../auth/operations";
import {
  apiFetchContacts,
  apiAddContact,
  apiDeleteContact,
  apiEditContact,
} from "./operations";

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    setCurentContact(state, action) {
      state.curentContact = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiFetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(apiFetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiAddContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isOpenModal = false;
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiEditContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(apiEditContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        );
        state.curentContact = null;
      })
      .addCase(apiEditContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiLogOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
export const { setCurentContact } = contactsSlice.actions;
