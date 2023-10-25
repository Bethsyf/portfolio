import React from 'react';
import s from './Footer.module.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div className={s.container} id="contact">
        <div className={s.info}>
          <h2>Contacto</h2>
          <div className={s.rrss}>
            <SiGmail />
            <p>bethsyfalcon@gmail.com</p>
          </div>
          <div className={s.rrss}>
            <FaLinkedinIn />
            <a
              href="https://www.linkedin.com/in/bethsyfalcon-frontend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Bethsy Falcon
            </a>
          </div>
          <div className={s.rrss}>
            <FaGithub />
            <a
              href="https://github.com/Bethsyf"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Bethsyf
            </a>
          </div>
        </div>
        <p className={s.pd}>
          Made with ❤️ by&nbsp;
          <a
            href="https://github.com/Bethsyf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Bethsyf
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
