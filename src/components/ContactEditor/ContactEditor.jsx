// import { useDispatch } from "react-redux";
// import { useId } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { editContact } from "../../redux/tasks/operations";
// import css from "./TaskEditor.module.css";

// export default function ContactEditor() {
//   const dispatch = useDispatch();
//   const emailFieldId = useId();
//   const passwordFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     const text = form.elements.text.value;
//     if (text !== "") {
//       dispatch(addTask(text));
//       form.reset();
//       return;
//     }
//     alert("Task cannot be empty. Enter some text!");
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form className={css.form}>
//         <div>
//           <label className={css.label} htmlFor={emailFieldId}>
//             Email
//           </label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" component="span" />
//         </div>

//         <div>
//           <label className={css.label} htmlFor={passwordFieldId}>
//             Password
//           </label>
//           <Field type="text" name="password" id={passwordFieldId} />
//           <ErrorMessage name="password" component="span" />
//         </div>

//         <button type="submit">Log In</button>
//       </Form>
//     </Formik>
//   );
// }
