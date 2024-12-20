import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectContacts = (state) => state.contactsData.items;
export const selectLoading = (state) => state.contactsData.loading;
export const selectError = (state) => state.contactsData.error;
export const selectCuretnContact = (state) => state.contactsData.curentContact;
export const selectOpenModal = (state) => state.contactsData.isOpenModal;

// Мемоізований селектор
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts?.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(filters.toLowerCase().trim()) ||
        contact.number.toLowerCase().includes(filters.toLowerCase().trim())
    );
  }
);
