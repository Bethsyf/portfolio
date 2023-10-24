import React, { useState } from 'react';
import s from './NavbarView.module.scss';
import { PiBarcodeBold } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';

const NavbarView = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={s.container}>
      <div className={s.navb}>
        <PiBarcodeBold className={s.iconCode} />
        <button onClick={handleToggle} className={s.btMenu} type="button">
          <TiThMenu />
        </button>
      </div>
      <div className={s.contMenu}>
        <ul className={`${toggle ? s.menu : s.menuHidden}`}>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#home">
              Inicio
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#testimonials">
              testimonials
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#contact">
              contact
            </a>
          </li>
        </ul>

        <div>
          <ul className={s.menuDesk}>
            <li className={s.item}>
              <a className={s.link} href="#home">
                Inicio
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#testimonials">
                Proyectos
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#contact">
                Contactame
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
