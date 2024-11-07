import { useId } from "react";
import MaskedInput from "react-text-mask";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { ContsctSchema } from "../../utils/schemas";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "../../utils/toastStyles";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }))
      .unwrap()
      .then(() => {
        toast.success("Contact success added!");
      });

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
            <label className={styles.label} htmlFor={nameFieldId}>
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
              className={styles.error}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.label} htmlFor={numberFieldId}>
              Number
            </label>
            <MaskedInput
              mask={[
                "+",
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              value={values.number}
              onChange={(event) => setFieldValue("number", event.target.value)}
              placeholder="+38 077 777-77-77"
              className={styles.field}
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={styles.error}
            />
          </div>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
          <Toaster toastOptions={toastOptions} />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
