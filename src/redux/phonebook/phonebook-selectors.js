
const getContacts = state => state.rootReduser.contactReduser;
const getFilter = state => state.rootReduser.filterReduser;

export default function getVisibleContacts(state) {
  const contacts = getContacts(state);
  const filter = getFilter(state);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
}

