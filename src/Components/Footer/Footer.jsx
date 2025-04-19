import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [counts, setCounts] = useState({
    characters: 0,
    transformations: 0,
    planets: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersRes, transformationsRes, planetsRes] = await Promise.all([
          fetch('https://dragonball-api.com/api/characters').then(res => res.json()),
          fetch('https://dragonball-api.com/api/transformations').then(res => res.json()),
          fetch('https://dragonball-api.com/api/planets').then(res => res.json()),
        ]);

        setCounts({
          characters: charactersRes?.meta?.totalItems || 0,
          transformations: transformationsRes?.length || 0, // 👈 aquí cambiamos
          planets: planetsRes?.meta?.totalItems || 0,
        });
      } catch (error) {
        console.error('Error fetching counts in Footer:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-info">
        <strong>
          CHARACTERS: {counts.characters}&nbsp;&nbsp;
          TRANSFORMATIONS: {counts.transformations}&nbsp;&nbsp;
          PLANETS: {counts.planets}
        </strong>
      </div>
      <hr />
      <h4>Diseñado por: Carlos Daniel Gomez Murcia</h4>
    </footer>
  );
};

export default Footer;
