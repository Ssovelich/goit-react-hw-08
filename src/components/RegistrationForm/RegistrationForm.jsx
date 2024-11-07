import { ErrorMessage, Form, Field, Formik } from "formik";
import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { RegistrationSchema } from "../../utils/schemas";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "../../utils/toastStyles";

const initialValues = { name: "", email: "", password: "" };

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Success register!");
      })
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          toast.error("User with this email already exists");
        }
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="name">
            Username
          </label>
          <Field
            className={styles.field}
            type="text"
            name="name"
            id="name"
            placeholder="Anna Kuper"
          />
          <ErrorMessage
            className={styles.error}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <ErrorMessage
            className={styles.error}
            name="email"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field
            className={styles.field}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={styles.error}
            name="password"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
        <Toaster toastOptions={toastOptions} />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
