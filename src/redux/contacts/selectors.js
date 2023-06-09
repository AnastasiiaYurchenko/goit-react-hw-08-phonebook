export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  if (state.filter) {
    const normalizedFilter = state.filter.toLowerCase();
    const visibleContacts = state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  } else {
    return state.contacts.items;
  }
};
