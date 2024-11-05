import { ErrorMessage, Form, Field, Formik } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const initialValues = { email: "", password: "" };

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "The password must consist of at least 8 characters!")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    console
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.field}
            type="email"
            name="email"
            id="email"
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
