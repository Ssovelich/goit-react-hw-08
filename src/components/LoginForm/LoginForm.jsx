import { ErrorMessage, Field, Formik } from "formik";
import styles from "./LoginForm.module.css";
import { Form } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "The password must consist of at least 8 characters!")
    .required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      //   onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Field className={styles.field} type="email" name="email" id="email" />
        <ErrorMessage
          className={styles.error}
          name="email"
          component="div"
        ></ErrorMessage>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.field}
          type="password"
          name="password"
          id="password"
        />
        <ErrorMessage
          className={styles.error}
          name="password"
          component="div"
        ></ErrorMessage>
        {/* {error && (
          <div className={styles.error}>Incorrect email or password</div>
        )} */}
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
