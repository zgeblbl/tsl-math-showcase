import React, { useState } from 'react';
import { translations } from './translations';
import './Showcase.css';

const Showcase = () => {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  return (
    <div className="showcase-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">Matema<span>Dil</span></div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#features">{t.navFeatures}</a>
            <a href="#about">{t.navAbout}</a>
            <a href="#process">{t.navProcess}</a>
            <a href="#team">{t.navTeam}</a>
            <a href="#tech">{t.navTech}</a>
          </div>
          <button 
            className="lang-btn" 
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
      </header>

      {/* --- 1. SIRADA: FEATURES GRID (VİDEOLAR) --- */}
      <section id="features" className="features-grid">
        <div className="feature-card">
          <div className="video-placeholder">
             {/* Videoları çekince burayı açarsın: <video autoPlay loop muted playsInline src="/videos/cv_demo.mp4" /> */}
             <div className="play-icon">▶</div>
             <p>Demo Video 1</p>
          </div>
          <h3>{t.clip1}</h3>
          <p className="desc">{t.clip1Desc}</p>
        </div>

        <div className="feature-card">
          <div className="video-placeholder">
             <div className="play-icon">▶</div>
             <p>Demo Video 2</p>
          </div>
          <h3>{t.clip2}</h3>
          <p className="desc">{t.clip2Desc}</p>
        </div>

        <div className="feature-card">
          <div className="video-placeholder">
             <div className="play-icon">▶</div>
             <p>Demo Video 3</p>
          </div>
          <h3>{t.clip3}</h3>
          <p className="desc">{t.clip3Desc}</p>
        </div>
      </section>

      {/* --- 2. SIRADA: HAKKINDA BÖLÜMÜ (TANITICI KISIM) --- */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
                <h3>120+</h3>
                <p>{lang === 'tr' ? 'Akademik Terim' : 'Academic Terms'}</p>
            </div>
            <div className="stat-item">
                <h3>∞</h3>
                <p>{lang === 'tr' ? 'Fırsat Eşitliği' : 'Equal Opportunity'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PROCESS SECTION --- */}
        <section id="process" className="process-section">
        <h2>{t.processTitle}</h2>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-number">1</div>
                <h3>{t.step1}</h3>
                <p>{t.step1Desc}</p>
            </div>
            <div className="timeline-item">
                <div className="timeline-number">2</div>
                <h3>{t.step2}</h3>
                <p>{t.step2Desc}</p>
            </div>
            <div className="timeline-item">
                <div className="timeline-number">3</div>
                <h3>{t.step3}</h3>
                <p>{t.step3Desc}</p>
            </div>
            <div className="timeline-item">
                <div className="timeline-number">4</div>
                <h3>{t.step4}</h3>
                <p>{t.step4Desc}</p>
            </div>
        </div>
        </section>

      {/* --- 4. TEAM SECTION --- */}
        <section id="team" className="team-section">
        <h2>{t.teamTitle}</h2>
        {/* DANIŞMAN HOCA KISMI */}
        <div className="supervisor-container">
            <div className="supervisor-card">
            <p className="supervisor-label">{t.supervisor}</p>
            <h3>{t.supervisorName}</h3>
            <p className="supervisor-dept">{t.supervisorDept}</p>
            </div>
        </div>
        <div className="team-grid">
            {/* Özge Kartı */}
            <div className="team-card">
            <div className="member-photo-wrapper">
                <div className="photo-placeholder">Ö</div> 
            </div>
            <h3>Özge Bülbül</h3>
            <p className="member-role">{t.role}</p>
            <p className="member-dept">{t.ozgeDept}</p>
            </div>

            {/* Berke Kartı */}
            <div className="team-card">
            <div className="member-photo-wrapper">
                <div className="photo-placeholder">B</div>
            </div>
            <h3>Berke Taşkın</h3>
            <p className="member-role">{t.role}</p>
            <p className="member-dept">{t.berkeDept}</p>
            </div>
        </div>
        </section>

        {/* --- 5. SIRADA: TECH SECTION --- */}
        <section id="tech" className="tech-section">
            <h2>{t.techTitle}</h2>
            <p>{t.techSubtitle}</p>
            <div className="tech-badge-container">
            <div className="tech-badge">React.js</div>
            <div className="tech-badge">Java Spring Boot</div>
            <div className="tech-badge">TensorFlow.js</div>
            <div className="tech-badge">PostgreSQL</div>
            <div className="tech-badge">Teachable Machine</div>
            </div>
        </section>


      {/* --- FOOTER --- */}
      <footer className="footer">
        <p>©{t.footerText}</p>
      </footer>
    </div>
  );
};

export default Showcase;