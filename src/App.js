import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Omne from './components/omne'; // Import the Omně component
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import konfigurace pro i18next
import Cursor from './components/Cursor'; // Importujeme Cursor komponentu

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Cursor /> {/* Přidáme kurzor komponentu */}
        <Navbar />
        <Header />
        <Omne />
        <Projects />
        <Pricing />
        <Contact />
      </div>
    </I18nextProvider>
  );
}

export default App;
