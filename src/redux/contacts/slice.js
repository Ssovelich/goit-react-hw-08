import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  error: false,
  isOpenModal: false,
  contactDelete: null,
  isOpenEditModal: false,
  editContact: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    setCurentContact(state, action) {
      state.curentContact = action.payload;
    },
    openModal(state, action) {
      state.isOpenModal = true;
      state.contactDelete = action.payload;
    },
    closeModal(state) {
      state.isOpenModal = false;
      state.contactDelete = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isOpenModal = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        );
        state.curentContact = null;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { openModal, closeModal } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { setCurentContact } = contactsSlice.actions;
