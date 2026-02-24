import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import s from "./ContactMe.module.scss";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(30, "Máximo 30 caracteres")
    .required("Nombre requerido"),
  email: Yup.string()
    .email("Correo no válido")
    .required("Correo requerido"),
  message: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(500, "Máximo 500 caracteres")
    .required("Mensaje requerido"),
});

export default function ContactMe() {
  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok)
        throw new Error("Error al enviar");
      resetForm();
      alert("Mensaje enviado correctamente. Te contactaré pronto.");
    } catch (error) {
      console.error(error);
      alert("Hubo un error. Intenta nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.contactForm}>
      <h3 className={s.titleForm}>
        Envíame un mensaje
      </h3>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <FormField
              label="Nombre"
              name="name"
              type="text"
              placeholder="Tu nombre"
            />
            <FormField
              label="Correo electrónico"
              name="email"
              type="email"
              placeholder="tu@email.com"
            />
            <FormField
              label="Mensaje"
              name="message"
              as="textarea"
              placeholder="Escribe tu mensaje"
            />
            <button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Enviando..."
                : "Enviar mensaje"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: string;

}
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  as,
}: FormFieldProps) {
  return (
    <div className={s.formGroup}>
      <label htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        as={as}
        className={s.inputField}
      />
      <ErrorMessage
        name={name}
        component="p"
        className={s.error}
      />
    </div>
  );
}