import React, { useState } from 'react';
import { translations } from './translations';
import './Showcase.css';

// Carousel için Swiper bileşenleri
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ozgePhoto from './zge1.jpeg';
import berkePhoto from './bb.jpeg';

const Showcase = () => {
  const [lang, setLang] = useState('tr');
  const [theme, setTheme] = useState('light');
  const t = translations[lang];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const videoData = [
    { 
      id: 1, 
      src: process.env.PUBLIC_URL + '/videos/cv.mp4',
      title: lang === 'tr' ? 'Bilgisayarlı Görü ile Tanıma' : 'CV Recognition', 
      desc: lang === 'tr' ? 'ResNet-50 tabanlı modelimizle işaret dili hareketlerini anlık olarak yüksek doğrulukla tanıyoruz.' : 'Real-time recognition of sign language gestures using our ResNet-50 based model.' 
    },
    { 
      id: 2, 
      src: process.env.PUBLIC_URL + '/videos/test.mp4',
      title: lang === 'tr' ? 'Performans Değerlendirme' : 'Learning Evaluation', 
      desc: lang === 'tr' ? 'Öğrencilerin öğrenme süreçlerini testler ve anlık geri bildirimlerle analiz ediyoruz.' : 'Analyzing student learning processes through tests and instant feedback.' 
    },
    { 
      id: 3, 
      src: process.env.PUBLIC_URL + '/videos/liderlik.mp4',
      title: lang === 'tr' ? 'Başarı ve Motivasyon' : 'Leaderboard & Motivation', 
      desc: lang === 'tr' ? 'Liderlik tablosu ve rozet sistemiyle öğrenciler arasındaki etkileşimi ve motivasyonu artırıyoruz.' : 'Increasing student engagement and motivation through leaderboards and badge systems.' 
    },
    { 
      id: 4, 
      src: process.env.PUBLIC_URL + '/videos/harita.mp4',
      title: lang === 'tr' ? 'Kişiselleştirilmiş Yol Haritası' : 'AI Roadmap Generation', 
      desc: lang === 'tr' ? 'Gemini AI desteğiyle her öğrencinin seviyesine özel dinamik bir öğrenme planı oluşturuyoruz.' : 'Generating dynamic learning plans tailored to each student’s level using Gemini AI.' 
    },
    { 
      id: 5, 
      src: process.env.PUBLIC_URL + '/videos/sozluk.mp4',
      title: lang === 'tr' ? 'TİD Akademik Terimler Sözlüğü' : 'TSL Academic Dictionary', 
      desc: lang === 'tr' ? '120\'den fazla matematiksel ve akademik terimin Türk İşaret Dili karşılıklarını sunuyoruz.' : 'Providing TSL equivalents for over 120 mathematical and academic terms.' 
    },
    { 
      id: 6, 
      src: process.env.PUBLIC_URL + '/videos/profil.mp4', 
      title: lang === 'tr' ? 'Gelişmiş Profil Detayları' : 'Advanced Profile Details', 
      desc: lang === 'tr' ? 'Kullanıcıların geçmiş başarılarını, tamamladıkları dersleri ve istatistiklerini detaylıca takip etmesini sağlıyoruz.' : 'Allowing users to track their past achievements, completed lessons, and detailed statistics.' 
    }
  ];

  return (
    <div className={`showcase-container ${theme}`}>
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
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            className="lang-btn" 
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
          >
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>
      </nav>
      
      {/* --- HERO --- */}
      <header className="hero">
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
        </div>
      </header>

      {/* --- FEATURES CAROUSEL (VİDEOLAR) --- */}
      <section id="features" className="features-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="video-swiper"
        >
          {videoData.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="feature-card">
                <div className="video-placeholder">
                  <video 
                    key={video.id} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    className="feature-video"
                    /* Bazı tarayıcılar için JS ile oynatma desteği */
                    onCanPlay={(e) => e.target.play()} 
                  >
                    <source src={video.src} type="video/mp4" />
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                </div>
                <h3>{video.title}</h3>
                <p className="desc">{video.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- ABOUT SECTION --- */}
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
      
      {/* --- PROCESS SECTION --- */}
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

      {/* --- TEAM SECTION --- */}
      <section id="team" className="team-section">
        <h2>{t.teamTitle}</h2>
        <div className="supervisor-container">
            <div className="supervisor-card">
              <p className="supervisor-label">{t.supervisor}</p>
              <h3>{t.supervisorName}</h3>
              <p className="supervisor-dept">{t.supervisorDept}</p>
            </div>
        </div>
        <div className="team-grid">
            <div className="team-card">
              <div className="member-photo-wrapper">
                <img src={ozgePhoto} alt="Özge" className="member-photo" /> 
              </div>
              <h3>Özge Bülbül</h3>
              <p className="member-role">{t.role}</p>
              <p className="member-dept">{t.ozgeDept}</p>
            </div>
            <div className="team-card">
              <div className="member-photo-wrapper">
                <img src={berkePhoto} alt="Berke" className="member-photo" /> 
              </div>
              <h3>Berke Taşkın</h3>
              <p className="member-role">{t.role}</p>
              <p className="member-dept">{t.berkeDept}</p>
            </div>
        </div>
      </section>

      {/* --- TECH SECTION --- */}
      <section id="tech" className="tech-section">
        <h2>{t.techTitle}</h2>
        <div className="tech-badge-container">
          <div className="tech-badge">React.js</div>
          <div className="tech-badge">Java Spring Boot</div>
          <div className="tech-badge">TensorFlow.js</div>
          <div className="tech-badge">PostgreSQL</div>
          <div className="tech-badge">Resnet-50</div>
          <div className="tech-badge">Gemini AI</div>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footerText}</p>
      </footer>
    </div>
  );
};

export default Showcase;