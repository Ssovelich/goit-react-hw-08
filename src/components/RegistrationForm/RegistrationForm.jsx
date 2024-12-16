import styles from "./RegistrationForm.module.css";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { apiRegister } from "../../redux/auth/operations";
import { RegistrationSchema } from "../../utils/schemas";

const initialValues = { name: "", email: "", password: "" };

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values))
      .unwrap()
      .then(() => {
        toast.success("Your account has been created!");
      })
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          toast.error("User with this email is already exists");
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
            Name
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
        <div className={`${styles.formItem} ${styles.passwordContainer}`}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field
            className={styles.field}
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
          <ErrorMessage
            className={styles.error}
            name="password"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
        <div className={styles.wrapLoginPrompt}>
          <span className={styles.loginPrompt}>
            Already have an acccount?&nbsp;
          </span>
          <a href="/login" className={styles.loginLink}>
            Login
          </a>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
