import React, { useEffect, useState } from 'react';
import './Cursor.css'; // Importujeme CSS

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });
  const [hover, setHover] = useState(false); // Stav pro zjištění, zda je kurzor nad specifickým prvkem

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorStyle({
        left: event.clientX - 10, // Nastavíme kurzor o 10px vlevo, aby byl centrální
        top: event.clientY - 10, // Nastavíme kurzor o 10px nahoru
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setHover(true); // Zvětší kurzor, když je nad konkrétním prvkem
  };

  const handleMouseLeave = () => {
    setHover(false); // Resetuje kurzor na původní velikost
  };

  return (
    <>
      <div
        className={`cursor ${hover ? 'cursor-hover' : ''}`} // Aplikujeme třídu pro změnu velikosti kurzoru
        style={{ left: cursorStyle.left, top: cursorStyle.top }}
      ></div>

      {/* Tento div je pro všechny odkazy v navbaru */}
      <div
        className="cursor-target"
        onMouseEnter={handleMouseEnter} // Když najede na prvek
        onMouseLeave={handleMouseLeave} // Když opustí prvek
      >
        Hover me
      </div>
    </>
  );
};

export default Cursor;
