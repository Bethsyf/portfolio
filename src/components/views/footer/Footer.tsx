import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={s.container} id="contact">
        <div className={s.info}>
          <h2>Contacto</h2>
          <p>Contacto: bethsyfalcon@gmail.com</p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/tu-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              @TuLinkedIn
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              @TuUsuario
            </a>
          </p>
        </div>
        <p className={s.pd}>Made with ❤️ by @Bethsyf</p>
      </div>
    </footer>
  );
};

export default Footer;
