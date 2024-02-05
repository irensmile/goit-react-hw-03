import './App.css'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList'
import { SearchBox } from './components/SearchBox/SearchBox'
import { useState, useEffect } from 'react';


function App() {
  
  const [contactList, setContactList] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]);
  const [searchMessage, setSearchMessage] = useState("");

  // Load saved contacts (called once on loading)
  useEffect(() => { 
    const savedValues = JSON.parse(localStorage.getItem("contacts"));
    setContactList(savedValues);
  }, [])

  // Callback for deleting a single contact (and updating local storage)
  const onDelete = (id) => {
    const filteredContacts = contactList.filter(contact => contact.id !== id);
    setContactList(filteredContacts);
    localStorage.setItem("contacts", JSON.stringify(filteredContacts));
  }

  // Callback adding a single contact (and updating local storage)
  const onAdd = (name, number, id) => {
    const newContact = { id: id, name: name, number: number };

    const newValues = [...contactList, newContact];
    setContactList(newValues);
    localStorage.setItem("contacts", JSON.stringify(newValues));
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
