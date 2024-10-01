import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";

const initialValues = {
  username: "",
  usertel: "",
};

const ContactForm = () => {
  const ContsctSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    usertel: Yup.number().min(9, "xxx-xx-xx").required("Required"),
  });

  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContsctSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={styles.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" component="span" />
        </div>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={styles.field}
            type="tel"
            name="usertel"
            id={telFieldId}
          />
          <ErrorMessage name="usertel" component="span" />
        </div>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
