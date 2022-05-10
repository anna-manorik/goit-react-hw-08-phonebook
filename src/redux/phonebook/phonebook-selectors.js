
export function getVisibleContacts(contacts, filterValue) {
  if(contacts){
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
