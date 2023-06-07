import { Formik } from 'formik';
import {
  FormField,
  Form,
  Button,
  Field,
  ErrorMessage,
} from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  phone: Yup.string().phone('UA').required('Required field'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const totalNames = items.map(contact => contact.name);

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactsSchema}
        onSubmit={(values, actions) => {
          // values это объект {name: "ghghg", phone:"56656"}

          if (totalNames.includes(values.name)) {
            window.alert(`${values.name} is allready in contacts`);
            // console.log(`${values.name} is allready in contacts`);
            return;
          }
          dispatch(addContact(values));
          // или это можно расписать(если не менять в инпуте телефона name="number" на name="phone")
          // dispatch(addContact({ name: values.name, phone: values.number }));
          actions.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name
            <Field name="name" placeholder="Jane Petrenko" />
            <ErrorMessage name="name" component="div" />
          </FormField>

          <FormField>
            Number
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </FormField>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
