import { ErrorMessage, Field, Formik } from "formik";
import styles from "./RegisterForm.module.css";
import { Form } from "react-router-dom";
import * as Yup from "yup";

const initialValues = { name: "", email: "", password: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "The password must consist of at least 8 characters!")
    .required("Required"),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      //    onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Username
        </label>
        <Field className={styles.field} type="text" name="name" id="name" />
        <ErrorMessage
          className={styles.error}
          name="name"
          component="div"
        ></ErrorMessage>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <Field className={styles.field} type="email" name="email" id="email" />
        <ErrorMessage
          className={styles.error}
          name="email"
          component="div"
        ></ErrorMessage>
        {/* {error && <div className={styles.error}>{error}</div>} */}
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
        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
