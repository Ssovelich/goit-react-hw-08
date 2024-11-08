import { IoMdClose } from "react-icons/io";
import { ContsctSchema } from "../../utils/schemas";
import styles from "./ContactEditModal.module.css";
import { useEffect, useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { editContact } from "../../redux/contacts/operations";
// import { setCurentContact } from "../../redux/contacts/slice";
import MaskedInput from "react-text-mask";

const ContactEditModal = ({
  onCloseEditModal,
  onBackdropClick,
  id,
  name,
  number,
}) => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ ...values, id }))
      .unwrap()
      .then(() => {
        toast.success("Contact is edited successfully!");
        onCloseEditModal();
      });

    actions.resetForm();
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseEditModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseEditModal]);

  return (
    <div onClick={onBackdropClick} className={styles.backdrop}>
      {/* <div className={styles.modalForm}> */}
      <Formik
        initialValues={{ name, number }}
        onSubmit={handleSubmit}
        validationSchema={ContsctSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.modalForm}>
            <button
              onClick={onCloseEditModal}
              className={styles.btnClose}
              type="button"
            >
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
                onChange={(event) =>
                  setFieldValue("number", event.target.value)
                }
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
      {/* </div> */}
    </div>
  );
};

export default ContactEditModal;
