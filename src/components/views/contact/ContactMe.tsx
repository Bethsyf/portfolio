import React from 'react'
import s from './ContactMe.module.scss'

const ContactMe = () => {
  return (
    <div className={s.contactForm}>
            <h2 className={s.titleForm}>Envíame un mensaje</h2>
            <form>
              <div className={s.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escribe tu mensaje"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className={s.submitButton}>Enviar</button>
            </form>
            </div>
  )
}

export default ContactMe
