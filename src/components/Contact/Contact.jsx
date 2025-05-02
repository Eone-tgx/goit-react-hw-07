import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
