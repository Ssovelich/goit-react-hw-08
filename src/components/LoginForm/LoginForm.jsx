import styles from "./LoginForm.module.css";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { apiLogIn } from "../../redux/auth/operations";
import { LoginSchema } from "../../utils/schemas";

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogIn(values))
      .unwrap()
      .then(() => {
        toast.success("You have successfully logged in");
        actions.resetForm();
      })

      .catch(() => {
        toast.error("Incorrect email or password");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={styles.form}>
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
