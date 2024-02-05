import './App.css'
import {ContactForm} from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList'
import { SearchBox } from './components/SearchBox/SearchBox'
import { useState } from 'react';


function App() {
  
  const [contactList, setContactList] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const [searchMessage, setSearchMessage] = useState("");

  // Callback for deleting a single contact
  const onDelete = (id) => {
    setContactList(contactList.filter(contact => contact.id !== id));
  }

  // Callback adding a single contact
  const onAdd = (name, number, id) => {
    const newContact = { id: id, name: name, number: number };
    setContactList([...contactList, newContact]);
  }

  //Callback for searching
  const onSearch = (searchString) => {
    setSearchMessage(searchString);
  }

  // Function to filter element based on searchMessage
  const filterContacts = () => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(searchMessage.toLowerCase()))
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox onSearch={onSearch} />
      <ContactList contacts={filterContacts()} onDelete={onDelete}  />
    </div>
  )
  }

export default App
