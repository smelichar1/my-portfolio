import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.3,
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleRedirect = (url) => {
    window.open(url, '_blank'); // Otevře odkaz v nové záložce
  };

  return (
    <section id="projects" className="section-projects" ref={projectsRef}>
      <h2>{t('projects.title')}</h2>

      <div className="projects-grid">
        <div 
          className="project-card" 
          onClick={() => handleRedirect('https://github.com/smelichar1/ukolsimon')}
        >
          <img src="/images/react.png" alt="React Project" />
          <h3>{t('projects.reactTitle')}</h3>
          <p>{t('projects.reactDescription')}</p>
        </div>
        <div 
          className="project-card" 
          onClick={() => handleRedirect('https://github.com/kalibear99/laravel_projekt_skupina_uz_vazne-main')}
        >
          <img src="/images/laravel_logo.png" alt="Laravel Project" />
          <h3>{t('projects.laravelTitle')}</h3>
          <p>{t('projects.laravelDescription')}</p>
        </div>
        <div 
          className="project-card" 
          onClick={() => handleRedirect('https://github.com/smelichar1/metody')}
        >
          <img src="/images/c_sharp_logo.png" alt="C# Project" />
          <h3>{t('projects.cSharpTitle')}</h3>
          <p>{t('projects.cSharpDescription')}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
