import Link from 'next/link';
import { useState } from 'react';
import styles from './NavbarView.module.scss';

interface NavbarViewProps {
  isHomePage: boolean;
}

const NavbarView = ({ isHomePage }: NavbarViewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.nav} ${isHomePage ? styles.home : ''}`}>
      <button className={styles['navbar-toggle']} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`${styles['navbar-nav']} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" passHref>
            <div onClick={toggleNavbar}>
              <span>Inicio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/proyectos" passHref>
            <div onClick={toggleNavbar}>
              <span>Proyectos</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contacto" passHref>
            <div onClick={toggleNavbar}>
              <span>Contacto</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarView;
