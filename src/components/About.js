import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const aboutAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100px)' },
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.section style={aboutAnimation} className="section-about">
      <h2>{t('about.title')}</h2>
      <p>{t('about.content')}</p>
      <p>{t('about.additionalContent')}</p>
      <p>
        <strong>{t('about.skills')}</strong>: {t('about.skillsList')}
      </p>
    </animated.section>
  );
};

export default About;
