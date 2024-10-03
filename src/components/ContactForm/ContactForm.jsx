import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import MaskedInput from "react-text-mask";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const mask = () => (
  <div>
    <MaskedInput mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]} />
  </div>
);

const ContsctSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().min(9, "xxx-xx-xx").required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), ...values });
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
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={styles.errorMessage}
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.formItemLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={styles.field}
            component={mask}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.errorMessage}
          />
        </div>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
