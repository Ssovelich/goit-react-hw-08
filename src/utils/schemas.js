import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "The password must consist of at least 8 characters!")
    .required("Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "The password must consist of at least 8 characters!")
    .required("Password is required"),
});

export const ContsctSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^\+\d{2} \d{3} \d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format +38 077 777-77-77"
    )
    .required("Phone is required"),
});
