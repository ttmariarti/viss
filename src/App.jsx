import React from "react";
import "./App.css";

function App() {
  const myName = "Міша";
  const favoriteSite = {
    siteName: "Google",
    url: "https://www.google.com/",
  };
  const a = 5;
  const b = 7;
  const sum = a + b;
  const colors = ["Червоний", "Синій", "Зелений"];
  const imageUrl = "/welcome-illustration.svg";
  const imageAlt = "Ілюстрація з сонцем, пагорбами та хмаринками";

  return (
    <main className="page">
      <article className="welcome-card">
        <div className="welcome-copy">
          <span className="eyebrow">МІЙ ПЕРШИЙ REACT-САЙТ</span>
          <h1>Привіт, я {myName}!</h1>
          <p className="intro">Ласкаво просимо до нашого сайту!</p>
        </div>

        <img className="welcome-image" src={imageUrl} alt={imageAlt} />

        <div className="details-grid">
          <section className="detail-panel">
            <span className="panel-icon" aria-hidden="true">↗</span>
            <h2>Мій улюблений сайт</h2>
            <a
              className="site-link"
              href={favoriteSite.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {favoriteSite.siteName}
              <span aria-hidden="true"> →</span>
            </a>
          </section>

          <section className="detail-panel sum-panel">
            <span className="panel-icon" aria-hidden="true">＋</span>
            <h2>Математика</h2>
            <p className="sum">
              {a} <span>+</span> {b} <span>=</span> <strong>{sum}</strong>
            </p>
          </section>
        </div>

        <section className="colors-section">
          <h2>Список кольорів</h2>
          <ul className="color-list">
            {colors.map((color, index) => (
              <li className="color-item" key={color}>
                <span className={`color-dot color-dot-${index + 1}`} />
                {color}
              </li>
            ))}
          </ul>
        </section>
      </article>
      
    </main>
  );
}

export default App;
