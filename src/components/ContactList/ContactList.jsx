import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <div>
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);
