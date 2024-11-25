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
    name: Yup.string()
      .min(3, 'Mínimo 3 caracteres')
      .max(30, 'Máximo 30 caracteres')
      .required('Nombre requerido'),
    email: Yup.string()
      .email('Correo no válido')
      .required('Correo requerido'),
    message: Yup.string()
      .min(3, 'Mínimo 3 caracteres')
      .max(500, 'Máximo 500 caracteres')
      .required('Mensaje requerido'),
  });

  const handleSubmit = async (
    values: { name: string; email: string; message: string },
    { resetForm }: any
  ) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Correo enviado correctamente, espera y serás contactado');
        resetForm();
      } else {
        alert('Error al enviar el correo');
      }
    } catch (error) {
      console.error(error);
      alert('Error al enviar el correo');
    }
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
              <ErrorMessage name="name" component="p" className={s.error} />
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
              <ErrorMessage name="email" component="p" className={s.error} />
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
              <ErrorMessage name="message" component="p" className={s.error} />
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
 