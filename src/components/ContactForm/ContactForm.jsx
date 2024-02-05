import { Formik, Form, Field } from 'formik';
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
export const ContactForm = ({onAdd}) => {
  
  const nameFieldId = nanoid();
  const nameNumberId = nanoid();
  
  const handleSubmit = (values, actions) => { 
    onAdd(values.name, values.number, nanoid())
  };

    return ( 
      <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.row}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field type="text" id={nameFieldId} name="name" />
          </div>
          <div className={css.row}>
            <label htmlFor={nameNumberId}>Number</label>
            <Field type="text" id={nameNumberId} name="number" />
          </div>
          <button type="submit">Submit</button>
        </Form>
    </Formik>
  );
};
{/* // import { nanoid } from "nanoid"; */}



{/* // export const ContactForm = (props) => { */}

{/* //    const handleSubmit = evt => { */}
//         evt.preventDefault();
//         const form = evt.currentTarget;
//         props.onAddContact({ name: form.elements.name.value, number: form.elements.number.value });
//         form.reset();
//     }
//     const nameInputId = nanoid();
//         return (
//             <div className={css.form}>
//                 <form onSubmit={handleSubmit}>
//                     <div className={css.row}>
//                         <div><label htmlFor={nameInputId}>Name</label></div>
//                         <div><input type="text" name="name" id={nameInputId} /></div>
//                     </div>
//                     <div className={css.row}>
//                         <div><label>Number</label></div>
//                         <div><input type="tel" name="number" required /></div>
//                     </div>
//                     <button className="row" type="submit">Add contact</button> 
//                 </form>
//             </div>)
    
    
// }