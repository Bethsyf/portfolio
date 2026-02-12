import { useState } from 'react';
import Link from 'next/link';
import { PiBarcodeBold } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';
import { FaTimes } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import s from './NavbarView.module.scss';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Blog', href: '#blog' }, 
  { label: 'Contáctame', href: '#contact' },
];

const NavbarView = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(prev => !prev);

  const renderNavItems = (onClick?: () => void) =>
    navItems.map(item => (
      <li key={item.label} className={s.item}>
        <Link className={s.link} href={item.href} onClick={onClick}>
          {item.label}
        </Link>
      </li>
    ));

  return (
    <nav className={s.container}>
      <div className={s.navb}>
        <Link href="/">
          <PiBarcodeBold className={s.iconCode} />
        </Link>

        <button onClick={handleToggle} className={s.btMenu} type="button">
          {toggle ? <FaTimes className={s.iconMenu} /> : <TiThMenu className={s.iconMenu} />}
        </button>
      </div>

      <div className={s.contMenu}>
        
        {/* 📱 MOBILE */}
        <ul className={`${toggle ? s.menu : s.menuHidden}`}>
          {renderNavItems(handleToggle)}

          <li className={s.item}>
            <Link
              className={s.link}
              href="/cv.pdf"
              download="CV_Bethsy_Falcon"
              target="_blank"
              onClick={handleToggle}
            >
              Descargar CV
            </Link>
          </li>
        </ul>

        {/* 🖥 DESKTOP */}
        <ul className={s.menuDesk}>
          {renderNavItems()}

          <li className={s.item}>
            <Link
              className={`${s.link} ${s.downloadButton}`}
              href="/cv.pdf"
              download="CV_Bethsy_Falcon"
              target="_blank"
            >
              <FiDownload className={s.downloadIcon} /> Descargar CV
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default NavbarView;
