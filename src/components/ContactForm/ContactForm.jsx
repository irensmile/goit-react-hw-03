import { Formik, Form, Field } from 'formik';
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
import { object, string } from 'yup';
       
  // Form validation schema
  const FormValidationSchema = object({
    name: string().required().min(3).max(50),
    number: string().required().min(3).max(50),
  });

export const ContactForm = ({onAdd}) => {
  
  const nameFieldId = nanoid();
  const nameNumberId = nanoid();
  
  const handleSubmit = (values, actions) => { 
    onAdd({ id: nanoid(), name: values.name, number: values.number })
    actions.resetForm();
  };

    return ( 
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.row}>
              <div><label htmlFor={nameFieldId}>Name</label></div>
              <Field type="text" id={nameFieldId} name="name" />
              {touched.name && errors.name && <div>{errors.name}</div>}
            </div>
            <div className={css.row}>
              <div><label htmlFor={nameNumberId}>Number</label></div>
              <Field type="text" id={nameNumberId} name="number" />
              {touched.number && errors.number && <div className={css.error}>{errors.number}</div>}
            </div>
            <button type="submit">Add Contact</button>
          </Form>
        )}
    </Formik>
  );
}