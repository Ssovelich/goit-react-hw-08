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

const ContsctSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format 777-77-77"
    )
    .required("Required"),
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
      {({ values, setFieldValue }) => (
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
              placeholder="Anna Kuper"
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
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
              value={values.number}
              onChange={(e) => setFieldValue("number", e.target.value)}
              placeholder="777-77-77"
              className={styles.field}
              name="number"
              id={nameFieldId}
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
      )}
    </Formik>
  );
};

export default ContactForm;
