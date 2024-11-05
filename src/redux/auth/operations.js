import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contactsInstance = axios.create({
  baseURL: "https://connections-api.goit.global",
});
// Утиліта для додавання JWT
const setAuthHeader = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Утиліта для видалення JWT
const clearAuthHeader = () => {
  contactsInstance.defaults.headers.common.Authorization = "";
};
// POST @ /users/signup
// body: { name, email, password }
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await contactsInstance.post("users/signup", credentials);
      // Після успішної реєстрації додайте маркер до заголовка HTTP
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// POST @ /users/login
// body: { email, password }
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await contactsInstance.post("/users/login", credentials);
      // Після успішного входу додайте маркер до заголовка HTTP
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// POST @ /users/logout
// headers: Authorization: Bearer token
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await contactsInstance.post("/users/logout");
    // Після успішного виходу видаліть маркер із HTTP-заголовка
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// GET @ /users/me
// headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Читання токена зі стану через getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // Якщо токена немає, вийти без виконання жодного запиту
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // Якщо маркер є, додайте його до HTTP-заголовка та виконайте запит
      setAuthHeader(persistedToken);
      const response = await contactsInstance.get("/users/me");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
