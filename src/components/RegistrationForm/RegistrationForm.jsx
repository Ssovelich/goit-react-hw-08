import { ErrorMessage, Form, Field, Formik } from "formik";
import styles from "./RegisterForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
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
            type="email"
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
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
