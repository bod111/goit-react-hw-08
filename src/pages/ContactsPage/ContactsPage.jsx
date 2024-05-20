import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {/* <div>{isLoading && "Request in progress..."}</div> */}
      <ContactList />
    </>
  );
}
