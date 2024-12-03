import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Importujeme hook pro překlady

const Contact = () => {
  const { t } = useTranslation(); // Hook pro překlady
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className={`section-contact ${isVisible ? 'visible' : 'hidden'}`}
      ref={sectionRef}
    >
      <h2>{t('contact.title')}</h2> {/* Překlad pro nadpis sekce */}
      <form className="contact-form">
        <input type="text" placeholder={t('contact.namePlaceholder')} required />
        <input type="email" placeholder={t('contact.emailPlaceholder')} required />
        <textarea placeholder={t('contact.messagePlaceholder')} required></textarea>
        <button type="submit">{t('contact.submitButton')}</button>
      </form>
    </section>
  );
};

export default Contact;
