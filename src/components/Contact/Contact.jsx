import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contact}>
        <div className={css.nameBlock}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.nameBlock}>
          <FaPhone className={css.icon} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
