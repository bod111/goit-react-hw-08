import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Your contact has been successfully deleted!"))
      .catch((error) => error.message);

  return (
    <div className={css.container}>
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
      <Button
        variant="outlined"
        sx={{ fontWeight: "800", margin: "10px 3px", color: "#256698" }}
        startIcon={<DeleteIcon />}
        className={css.button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
}
