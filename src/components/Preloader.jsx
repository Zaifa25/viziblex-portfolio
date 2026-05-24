import React, { useEffect, useState } from 'react';
import '../styles/Extras.css';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="preloader-logo">VIZIBLEX</div>
      <div className="preloader-bar">
        <div className="preloader-progress"></div>
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
        All-in-One Digital Solutions
      </p>
    </div>
  );
};

export default Preloader;
