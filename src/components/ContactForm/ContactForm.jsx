import styles from "./ContactForm.module.css";
import { useId } from "react";
import MaskedInput from "react-text-mask";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { SiCcleaner } from "react-icons/si";
import { IoMdPersonAdd } from "react-icons/io";

import { apiAddContact } from "../../redux/contacts/operations";
import { ContactSchema } from "../../utils/schemas";
import { selectContacts } from "../../redux/contacts/selectors";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );
    if (isDuplicate) {
      toast.error(
        `Contact with name "${values.name}" or number "${values.number}" already exists!`
      );
      return;
    }

    dispatch(apiAddContact({ ...values }))
      .unwrap()
      .then(() => {
        toast.success("Contact is added successfully!");
      })
      .catch(() => {
        toast.error("Failed to add contact.");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ values, setFieldValue, resetForm }) => (
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
          <div className={styles.wrapBtn}>
            <button className={styles.btn} type="submit">
              <IoMdPersonAdd className={styles.icon} />
              &nbsp; Add contact
            </button>
            <button className={styles.btn} type="button" onClick={resetForm}>
              <SiCcleaner className={styles.icon} />
              &nbsp; Clear form
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
