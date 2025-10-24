import React from 'react';

function LoadingScreen({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="book-animation">
            <div className="book-page page-1"></div>
            <div className="book-page page-2"></div>
            <div className="book-page page-3"></div>
          </div>
        </div>

        <h1 className="loading-title">Kulüp Kütüphanesi</h1>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="designer-credit">
          <p>Designed By S.Rustemzade</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;