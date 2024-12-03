import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import pro i18n

const Omne = () => {
  const [isVisible, setIsVisible] = useState(false); // Stav pro sledování viditelnosti sekce
  const omneRef = useRef(null); // Ref na sekci
  const { t } = useTranslation(); // Hook pro překlady

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // Změní stav podle viditelnosti
        });
      },
      { threshold: 0.3 } // Sekce musí být alespoň z 50% viditelná
    );

    if (omneRef.current) {
      observer.observe(omneRef.current); // Sledování sekce
    }

    return () => {
      if (omneRef.current) {
        observer.unobserve(omneRef.current); // Uvolnění observeru
      }
    };
  }, []);

  return (
    <section id="omne" ref={omneRef} className={`section-omne ${isVisible ? 'visible' : ''}`}>
      <div className="omne-container">
        {/* Left Side */}
        <div className="omne-info">
          <h2>{t('omne.title')}</h2> {/* Použití překladu pro titul */}
          <p>
            {t('omne.description')}
          </p>
          <p>
            {t('omne.additionalInfo')}
          </p>
        </div>

        {/* Right Side */}
        <div className="omne-skills">
          <h3>{t('omne.skillsTitle')}</h3> {/* Použití překladu pro nadpis dovedností */}
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className={`skill-fill ${isVisible ? 'animate' : ''}`} // Přidání animace pouze když je viditelná
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: 'JavaScript', proficiency: 90 },
  { name: 'PHP', proficiency: 85 },
  { name: 'React', proficiency: 80 },
  { name: 'Laravel', proficiency: 85 },
  { name: 'CSS', proficiency: 95 },
];

export default Omne;
