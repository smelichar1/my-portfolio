import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Importujeme hook pro překlady

const Pricing = () => {
  const { t } = useTranslation(); // Hook pro překlady
  const pricingRef = useRef(null);

  useEffect(() => {
    // Vytvoření Intersection Observeru
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Když je sekce viditelná, přidáme třídu 'visible' pro zobrazení
          entry.target.classList.add('visible');
        } else {
          // Když sekce opustí zorné pole, odstraníme třídu 'visible'
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.3, // Sekce se musí alespoň z poloviny zobrazit
    });

    // Sledování sekce cen
    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    // Čistění observeru při unmount komponenty
    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  // Funkce pro plynulý posun na sekci Contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Plynulý přechod
    }
  };

  return (
    <section id="pricing" className="section-pricing" ref={pricingRef}>
      <h2>{t('pricing.title')}</h2> {/* Překlad pro nadpis sekce */}
      <div className="pricing-container">
        <div className="pricing-cards">
          <div className="pricing-card" onClick={scrollToContact}>
            <h3>{t('pricing.basicTitle')}</h3>
            <p>{t('pricing.startingAt')} <strong>{t('pricing.basicPrice')}</strong></p>
            <p>{t('pricing.basicDescription')}</p>
          </div>
          <div className="pricing-card" onClick={scrollToContact}>
            <h3>{t('pricing.ecommerceTitle')}</h3>
            <p>{t('pricing.startingAt')} <strong>{t('pricing.ecommercePrice')}</strong></p>
            <p>{t('pricing.ecommerceDescription')}</p>
          </div>
          <div className="pricing-card" onClick={scrollToContact}>
            <h3>{t('pricing.customTitle')}</h3>
            <p>{t('pricing.startingAt')} <strong>{t('pricing.customPrice')}</strong></p>
            <p>{t('pricing.customDescription')}</p>
          </div>
        </div>
        <div className="pricing-text">
          <h3>{t('pricing.whyChooseMe')}</h3> {/* Překlad pro nadpis "Why Choose Me?" */}
          <p>{t('pricing.description1')}</p>
          <br></br>
          <p>{t('pricing.description2')}</p>
          <br></br>
          <p>{t('pricing.description3')}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
