import { useState } from 'react';
import Link from 'next/link';
import { PiBarcodeBold } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa'; 
import { FiDownload } from 'react-icons/fi';
import s from './NavbarView.module.scss';

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
          {toggle ? <FaTimes className={s.iconMenu} /> : <TiThMenu className={s.iconMenu} />}
        </button>
      </div>
      <div className={s.contMenu}>
        <ul className={`${toggle ? s.menu : s.menuHidden}`}>
          <li className={s.item} >
            <Link className={s.link} href="/portfolio" onClick={handleToggle}>
              Inicio
            </Link>
          </li>
          <li className={s.item} >
            <Link className={s.link} href="#technologies" onClick={handleToggle}>
              Tecnologías
            </Link>
          </li>
          <li className={s.item} >
            <Link className={s.link} href="#projects" onClick={handleToggle}>
              Proyectos
            </Link>
          </li>
          <li className={s.item} >
            <Link className={s.link} href="#experience" onClick={handleToggle}>
              Experiencia
            </Link>
          </li>
          <li className={s.item} >
            <Link className={s.link} href="#contact" onClick={handleToggle}>
              Contáctame
            </Link>
          </li>
          <li className={s.item} >
            <Link
              className={s.link}
              href="/cv.pdf"
              download="CV_Bethsy_Falcon"
              target='_blank'
              onClick={handleToggle}
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
