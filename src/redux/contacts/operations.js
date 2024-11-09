import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsInstance } from "../auth/operations";

export const apiFetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await contactsInstance.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contacts/addContact",
  async (finalContact, thunkApi) => {
    try {
      const response = await contactsInstance.post("/contacts", finalContact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await contactsInstance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiEditContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const response = await contactsInstance.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
