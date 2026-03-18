import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import { useTranslation } from "@/hooks/useTranslation";

import { ButtonControl, TextControl } from "@/components/controls";

import s from "./ContactForm.module.scss";

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

export default function ContactForm() {
  const t = useTranslation("contact");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t.form.errors.nameMin)
      .max(30, t.form.errors.nameMax)
      .required(t.form.errors.nameRequired),

    email: Yup.string().email(t.form.errors.emailInvalid).required(t.form.errors.emailRequired),

    message: Yup.string()
      .min(3, t.form.errors.messageMin)
      .max(500, t.form.errors.messageMax)
      .required(t.form.errors.messageRequired),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error();

      resetForm();
      alert(t.form.success);
    } catch (error) {
      console.error(error);
      alert(t.form.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.contactForm}>
      <TextControl as="h3" variant="title" align="center" className={s.titleForm}>
        {t.form.title}
      </TextControl>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <FormField
              label={t.form.name}
              name="name"
              type="text"
              placeholder={t.form.placeholderName}
            />

            <FormField
              label={t.form.email}
              name="email"
              type="email"
              placeholder={t.form.placeholderEmail}
            />

            <FormField
              label={t.form.message}
              name="message"
              as="textarea"
              placeholder={t.form.placeholderMessage}
            />

            <ButtonControl type="submit" variant="primary" size="md">
              {isSubmitting ? t.form.submitting : t.form.submit}
            </ButtonControl>
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

function FormField({ label, name, type = "text", placeholder, as }: FormFieldProps) {
  return (
    <div className={s.formGroup}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        as={as}
        className={s.inputField}
      />
      <ErrorMessage name={name} component="p" className={s.error} />
    </div>
  );
}
