import React from 'react';
import s from './Footer.module.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className={s.container} id="contact">
        <div className={s.info}>
          <h2>Contacto</h2>
          <div className={s.rrss}>
            <SiGmail />
            <Link href='mailto:bethsyfalcon@gmail.com'> bethsyfalcon@gmail.com</Link>
          </div>
          <div className={s.rrss}>
            <FaLinkedinIn />
            <Link
              href="https://www.linkedin.com/in/bethsyfalcon-frontend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Bethsy Falcon
            </Link>
          </div>
          <div className={s.rrss}>
            <FaGithub />
            <Link
              href="https://github.com/Bethsyf"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Bethsyf
            </Link>
          </div>
        </div>
        <p className={s.pd}>
          Hecho con ❤️ por&nbsp;
          <Link
            href="https://github.com/Bethsyf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Bethsyf
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
