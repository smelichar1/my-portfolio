import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Správně přepínáme jazyk
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="header" smooth={true} duration={500}>{t('navbar.home')}</Link></li>
        <li><Link to="omne" smooth={true} duration={500}>{t('navbar.about')}</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>{t('navbar.projects')}</Link></li>
        <li><Link to="pricing" smooth={true} duration={500}>{t('navbar.pricing')}</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>{t('navbar.contact')}</Link></li>
      </ul>

      {/* Jazykový přepínač */}
      <div className="language-switcher">
        <button onClick={() => handleLanguageChange('en')} className="lang-btn">EN</button>
        <span>/</span>
        <button onClick={() => handleLanguageChange('cz')} className="lang-btn">CZ</button>
      </div>
    </nav>
  );
};

export default Navbar;
