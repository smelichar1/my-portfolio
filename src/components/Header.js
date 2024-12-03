import React from 'react';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="left-side">
        <div className="typing-container">
          <h1>
            <ReactTyped
              strings={[
                t('header.welcome'), 
                t('header.name'),
                t('header.job'),
                t('header.mission')
              ]}
              typeSpeed={60}
              backSpeed={50}
              backDelay={3000}
              startDelay={200}
              loop={true}
              showCursor={true}
              cursorChar="|"
              contentType="html" // Tohle zajistí, že <br /> bude fungovat
            />
          </h1>
        </div>
        <div className="description">
          <p>{t('header.description')}</p>
        </div>
        
      </div>

      <div className="right-side">
        <div className="profile-circle">
          <img src="images/guy.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
