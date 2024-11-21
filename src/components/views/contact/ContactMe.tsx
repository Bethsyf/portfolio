import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactMe.module.scss';

const ContactMe = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(30, 'El nombre no puede tener más de 30 caracteres')
      .required('El nombre es obligatorio'),
    email: Yup.string()
      .email('Debe ser un correo válido')
      .required('El correo es obligatorio'),
    message: Yup.string()
      .min(3, 'El mensaje debe tener al menos 3 caracteres')
      .max(500, 'El mensaje no puede tener más de 500 caracteres')
      .required('El mensaje es obligatorio'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Formulario enviado:', values);
   
  };

  return (
    <div className={s.contactForm}>
      <h2 className={s.titleForm}>Envíame un mensaje</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={s.formGroup}>
              <label htmlFor="name">Nombre</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className={s.inputField}
              />
              <ErrorMessage
                name="name"
                component="p"
                className={s.error}
              />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electrónico"
                className={s.inputField}
              />
              <ErrorMessage
                name="email"
                component="p"
                className={s.error}
              />
            </div>
            <div className={s.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Escribe tu mensaje"
                rows={4}
                className={s.textArea}
              />
              <ErrorMessage
                name="message"
                component="p"
                className={s.error}
              />
            </div>
            <button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMe;
