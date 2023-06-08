import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactas } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactas());
  }, [dispatch]);
  return (
    <div>
      <p>ContactsPage</p>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h1>Loading Contacts......</h1>}
      {error && <h1>{error}</h1>}
      {contacts.length > 0 && <ContactsList />}
      <GlobalStyle />
    </div>
  );
};

export default ContactsPage;
