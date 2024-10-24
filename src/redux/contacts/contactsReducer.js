const INITIAL_STATE = {
  contacts:
    //Спочатку береться інфа з локального сховища, якщо пусто, то підставити пустий масив
    JSON.parse(localStorage.getItem("contacts")) ?? [],

  filters: {
    name: "",
  },
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

// contacts/addContact
// contacts/deleteContact
