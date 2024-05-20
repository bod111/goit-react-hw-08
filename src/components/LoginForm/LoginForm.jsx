import { useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(4, "Too short")
    .max(20, "Too long")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit ~ values:", values);
    dispatch(logIn(values))
      // logIn({
      //   email: values.email,
      //   password: values.password,
      // })
      .unwrap()
      .then(() => toast.success("Login Success!!!"))
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.contactBlock}>
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.contactBlock}>
          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={css.field}
            type="text"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          sx={{ fontWeight: "800", margin: "10px 3px" }}
        >
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
