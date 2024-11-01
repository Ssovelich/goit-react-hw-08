import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
// import { useSelector } from "react-redux";
// import contactsBasic from "../contacts.json";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: false,
};

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// Створюємо slice

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectContacts = (state) => state.contactsData.items;
export const selectLoading = (state) => state.contactsData.loading;
export const selectError = (state) => state.contactsData.error;
export const selectFilters = (state) => state.filters.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filters.toLowerCase().trim()) ||
        contact.number.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);

//Генеруємо reducer
export const contactsReducer = contactsSlice.reducer;
