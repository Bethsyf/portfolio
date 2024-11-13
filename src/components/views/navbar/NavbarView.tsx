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
            <a className={s.link} href="/portfolio">
              Inicio
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#technologies">
              Tecnologías
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#projects">
              Proyectos
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#experience">
              Experiencia
            </a>
          </li>
          <li className={s.item} onClick={handleToggle}>
            <a className={s.link} href="#contact">
              Contáctame
            </a>
          </li>
          {/* Botón para descargar el CV */}
          <li className={s.item} onClick={handleToggle}>
            <a
              className={s.link}
              href="/cv.pdf"  // Aquí pones la ruta del archivo PDF en la carpeta 'public' o la URL de tu archivo
              download="Mi_CV"  // El nombre del archivo que se descargará
            >
              Descargar CV
            </a>
          </li>
        </ul>

        <div>
          <ul className={s.menuDesk}>
            <li className={s.item}>
              <a className={s.link} href="/portfolio">
                Inicio
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#technologies">
                Tecnologías
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#projects">
                Proyectos
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#experience">
                Experiencia
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="#contact">
                Contáctame
              </a>
            </li>
           
            <li className={s.item}>
            <a
                className={`${s.link} ${s.downloadButton}`}
                href="../../../../public/cv.pdf"
                download="CV_Bethsy_Falcon"
              >
                <FiDownload className={s.downloadIcon} /> Descargar CV
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarView;
