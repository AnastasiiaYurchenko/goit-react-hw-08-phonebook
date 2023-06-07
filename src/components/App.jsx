import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactas } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactas());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h1>Loading Contacts......</h1>}
      {error && <h1>{error}</h1>}
      {contacts.length > 0 && <ContactsList />}

      <GlobalStyle />
    </Layout>
  );
};
