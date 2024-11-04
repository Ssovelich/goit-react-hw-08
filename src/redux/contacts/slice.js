import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const INITIAL_STATE = {
  items: null,
  loading: false,
  error: false,
};

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

// export const selectContacts = (state) => state.contactsData.items;
// export const selectLoading = (state) => state.contactsData.loading;
// export const selectError = (state) => state.contactsData.error;
// export const selectFilters = (state) => state.filters.filters;

// // Мемоізований селектор
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filters) => {
//     return contacts?.filter(
//       (contact) =>
//         contact.name
//           .toLowerCase()
//           .trim()
//           .includes(filters.toLowerCase().trim()) ||
//         contact.number.toLowerCase().includes(filters.toLowerCase().trim()) ||
//         contact.email.toLowerCase().includes(filters.toLowerCase().trim())
//     );
//   }
// );

//Генеруємо reducer
export const contactsReducer = contactsSlice.reducer;
