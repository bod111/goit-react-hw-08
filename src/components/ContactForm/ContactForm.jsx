import { useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success("Your contact has been successfully added!"))
      .catch((error) => error.message);
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.contactBlock}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="p" />
        </div>
        <div className={css.contactBlock}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="p" />
        </div>

        <Button type="submit" variant="contained" className={css.button}>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}
