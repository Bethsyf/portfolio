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

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio.'),
    email: Yup.string()
      .email('Introduce un correo electrónico válido.')
      .required('El correo electrónico es obligatorio.'),
    message: Yup.string().required('El mensaje no puede estar vacío.'),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Formulario enviado:', values);
    // Aquí puedes agregar la lógica para enviar los datos al servidor.
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
