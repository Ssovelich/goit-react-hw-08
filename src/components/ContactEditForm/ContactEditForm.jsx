import { useId } from "react";
import MaskedInput from "react-text-mask";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactEditForm.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { setCurentContact } from "../../redux/contacts/slice";
import { IoMdClose } from "react-icons/io";
import { ContsctSchema } from "../../utils/schemas";
import toast from "react-hot-toast";

const ContactEditForm = ({ contactId, name, number }) => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ ...values, contactId }))
      .unwrap()
      .then(() => {
        toast.success("Contact is edited successfully!");
      });

    actions.resetForm();
  };

  const closeEdit = () => {
    dispatch(setCurentContact(null));
  };

  return (
    <Formik
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
      validationSchema={ContsctSchema}
    >
      {({ values, setFieldValue }) => (
        <Form className={styles.form}>
          <button onClick={closeEdit} className={styles.btnClose} type="button">
            <IoMdClose size={18} />
          </button>
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
            Save contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactEditForm;
