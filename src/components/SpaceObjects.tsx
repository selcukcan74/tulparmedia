import React from 'react';

const SpaceObjects = () => {
  return (
    <div className="floating-shapes">
      {/* Sol üst köşe - Uzay Gemisi */}
      <div 
        className="floating-spaceship"
        style={{
          top: '8%',
          left: '5%',
          animationDelay: '0s'
        }}
      >
        <div className="spaceship"></div>
      </div>

      {/* Sağ üst - Yıldız */}
      <div 
        className="floating-star"
        style={{
          top: '12%',
          right: '8%',
          animationDelay: '2s'
        }}
      >
        <div className="star-shape"></div>
      </div>

      {/* Sol orta - Gezegen */}
      <div 
        className="floating-planet"
        style={{
          top: '45%',
          left: '3%',
          animationDelay: '4s'
        }}
      >
        <div className="planet-shape"></div>
      </div>

      {/* Sağ orta - Uzay Gemisi */}
      <div 
        className="floating-spaceship"
        style={{
          top: '55%',
          right: '6%',
          animationDelay: '6s'
        }}
      >
        <div className="spaceship"></div>
      </div>

      {/* Sol alt - Yıldız */}
      <div 
        className="floating-star"
        style={{
          bottom: '15%',
          left: '8%',
          animationDelay: '1s'
        }}
      >
        <div className="star-shape"></div>
      </div>

      {/* Orta alt - Mini Uzay Gemisi */}
      <div 
        className="floating-spaceship"
        style={{
          bottom: '35%',
          right: '45%',
          animationDelay: '7s',
          transform: 'scale(0.8)'
        }}
      >
        <div className="spaceship"></div>
      </div>
    </div>
  );
};

export default SpaceObjects;