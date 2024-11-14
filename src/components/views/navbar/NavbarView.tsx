import React, { useState } from 'react';
import s from './NavbarView.module.scss';
import { PiBarcodeBold } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';
import { FiDownload } from 'react-icons/fi'; 
import Link from 'next/link';

const NavbarView = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={s.container}>
      <div className={s.navb}>
        <Link href={'/'}>
          <PiBarcodeBold className={s.iconCode} />
        </Link>
        <button onClick={handleToggle} className={s.btMenu} type="button">
          <TiThMenu className={s.iconMenu} />
        </button>
      </div>
      <div className={s.contMenu}>
        <ul className={`${toggle ? s.menu : s.menuHidden}`}>
          <li className={s.item} onClick={handleToggle}>
            <Link className={s.link} href="/portfolio">
              Inicio
            </Link>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <Link className={s.link} href="#technologies">
              Tecnologías
            </Link>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <Link className={s.link} href="#projects">
              Proyectos
            </Link>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <Link className={s.link} href="#experience">
              Experiencia
            </Link>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <Link className={s.link} href="#contact">
              Contáctame
            </Link>
          </li>
          {/* Botón para descargar el CV */}
          <li className={s.item} onClick={handleToggle}>
            <Link
              className={`${s.link} ${s.downloadButton}`}
              href="/cv.pdf"
                download="CV_Bethsy_Falcon"
                target='_blank' 
            >
              Descargar CV
            </Link>
          </li>
        </ul>

        <div>
          <ul className={s.menuDesk}>
            <li className={s.item}>
              <Link className={s.link} href="/portfolio">
                Inicio
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#technologies">
                Tecnologías
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#projects">
                Proyectos
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#experience">
                Experiencia
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#contact">
                Contáctame
              </Link>
            </li>
           
            <li className={s.item}>
            <Link
                className={`${s.link} ${s.downloadButton}`}
                href="/cv.pdf"
                download="CV_Bethsy_Falcon"
                target='_blank' 
              >
                <FiDownload className={s.downloadIcon} /> Descargar CV
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
