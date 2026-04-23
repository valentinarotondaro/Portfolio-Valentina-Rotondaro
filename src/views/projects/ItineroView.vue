<template>
  <div class="case-study">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">UX/UI DESIGN</span>
        <h1>Itinero. A Travel planning Mobile App.</h1>
      </header>

      <section class="hero">
        <img src="/img/itineroapp.png" alt="Itinero App Mockups" class="main-hero-img" />
      </section>

      <section class="case-study-content">

        <div class="case-section">
          <h2 class="section-label">CONTEXT</h2>
          <div class="section-body">
            <p>Itinero is a university group project born from a common frustration: the chaos of planning trips across multiple, disconnected platforms. Managing flights, stays, and activities usually leads to logistical confusion. We designed Itinero as a centralized hub to streamline the entire travel experience into one cohesive flow.</p>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">VALUE PROPOSITION</h2>
          <div class="section-body">
            <h3 class="vp-statement">"We help travelers who want to plan their trips by providing an automated schedule maker and personalized suggestions, unlike fragmented traditional tools."</h3>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">BUSINESS STRATEGY</h2>
          <div class="section-body">
            <div class="strategy-grid">
              <div class="strategy-card">
                <h4>Value Proposition</h4>
                <p>AI-driven itinerary personalization and centralized booking to optimize traveler time.</p>
              </div>
              <div class="strategy-card">
                <h4>Customer Segments</h4>
                <p>Frequent travelers, digital nomads, and tourists seeking authentic local experiences.</p>
              </div>
              <div class="strategy-card">
                <h4>Revenue Streams</h4>
                <p>Freemium model with premium subscriptions and booking commissions from partners.</p>
              </div>
              <div class="strategy-card">
                <h4>Key Partners</h4>
                <p>Booking platforms (Airbnb, Booking.com), local transport, and travel content creators.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">USER STORIES</h2>
          <div class="section-body">
            <div class="user-story-item">
              <span class="story-role">As a Busy Traveler,</span>
              <p>"I want the app to automatically generate a schedule so that I can organize my trip without spending hours on research."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a Solo Traveler,</span>
              <p>"I want to find safe areas to stay and local meetups so that I can feel secure and social during my trip."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a Group Organizer,</span>
              <p>"I want to share the itinerary with my friends so that everyone is on the same page and can vote on activities."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a Digital Nomad,</span>
              <p>"I want to filter locations by Wi-Fi speed and workspace availability so that I can work effectively while traveling."</p>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">PROCESS</h2>
          <div class="section-body">
            <h4 class="sub-label">LOFI</h4>
            <div class="lofi-dual-grid">
              <img src="/img/itinero-sketch-1.jpeg" alt="Sketch 1" class="process-img" />
              <img src="/img/itinero-sketch-2.jpeg" alt="Sketch 2" class="process-img" />
            </div>

            <h4 class="sub-label">STYLES</h4>
            <div class="styles-container">
              <div class="color-item">
                <div class="color-block" style="background-color: #04ADBF;"></div>
                <span class="hex-code">#04ADBF</span>
              </div>
              <div class="color-item">
                <div class="color-block" style="background-color: #04BFBF;"></div>
                <span class="hex-code">#04BFBF</span>
              </div>
              <div class="color-item">
                <div class="color-block" style="background-color: #027373;"></div>
                <span class="hex-code">#027373</span>
              </div>
              <div class="color-item">
                <div class="color-block" style="background-color: #87A617;"></div>
                <span class="hex-code">#87A617</span>
              </div>
            </div>

            <h4 class="sub-label">HIFI</h4>
            <div class="hifi-grid-6">
              <img src="/img/itinero-hi-1.png" alt="Screen 1" />
              <img src="/img/itinero-hi-2.png" alt="Screen 2" />
              <img src="/img/itinero-hi-3.png" alt="Screen 3" />
              <img src="/img/itinero-hi-4.png" alt="Screen 4" />
              <img src="/img/itinero-hi-5.png" alt="Screen 5" />
              <img src="/img/itinero-hi-6.png" alt="Screen 6" />
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">RESULT</h2>
          <div class="section-body">
            <div class="result-layout">
              <div class="video-wrapper">
                <video autoplay loop muted playsinline class="result-video">
                  <source src="/img/itinerovideo.mp4" type="video/mp4" />
                </video>
              </div>
              <p class="final-text">The final result is a functional prototype that not only prioritizes efficiency through automated scheduling but also focuses on the emotional journey of the traveler, ensuring safety, personalization, and social connectivity are at the forefront of the experience. By integrating intuitive navigation with a sophisticated AI backend, we successfully reduced the cognitive load on users, allowing them to focus on the joy of discovery rather than the stress of logistics.</p>
            </div>
          </div>
        </div>

      </section>

      <footer class="case-footer">
        <div class="pagination-wrapper">
          <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
          <router-link to="/portfolio/content-creation" class="footer-link">Next project &gt;</router-link>
        </div>
      </footer>

    </main>
  </div>
</template>

<style scoped>
/* ─── BASE ─────────────────────────────────────────────── */
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000;
  line-height: 1.6;
}

/* ─── LAYOUT ────────────────────────────────────────────── */
.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

/* ─── NAV ───────────────────────────────────────────────── */
.top-nav {
  padding: 25px 5%;
}

.back-btn {
  font-size: 25px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}

.back-btn:hover {
  opacity: 0.5;
}

/* ─── HEADER ────────────────────────────────────────────── */
.project-intro-header {
  margin-top: 40px;
  margin-bottom: 25px;
}

.category-badge {
  font-size: 14px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 5px;
}

.project-intro-header h1 {
  font-size: 60px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  margin-bottom: 80px;
}

.main-hero-img {
  width: 100%;
  border-radius: 10px;
}

/* ─── CASE SECTIONS ─────────────────────────────────────── */
.case-section {
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  gap: 40px;
  margin-bottom: 120px;
  align-items: start;
}

.section-label {
  font-size: 14px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 6px;
}

.section-body p {
  font-size: 19px;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
}

/* ─── VALUE PROPOSITION ─────────────────────────────────── */
.vp-statement {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
  text-align: justify;
}

/* ─── STRATEGY GRID ─────────────────────────────────────── */
.strategy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.strategy-card {
  background: #f8f8f8;
  padding: 25px;
  border-radius: 8px;
}

.strategy-card h4 {
  font-size: 13px;
  font-weight: 700;
  color: #04ADBF;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
}

.strategy-card p {
  font-size: 16px;
  text-align: left;
  margin: 0;
}

/* ─── USER STORIES ──────────────────────────────────────── */
.user-story-item {
  margin-bottom: 25px;
  border-left: 3px solid #04ADBF;
  padding-left: 20px;
}

.story-role {
  font-weight: 700;
  font-size: 13px;
  color: #04ADBF;
  text-transform: uppercase;
  display: block;
  margin-bottom: 5px;
}

/* ─── PROCESS ───────────────────────────────────────────── */
.sub-label {
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  margin: 40px 0 20px 0;
  display: block;
}

.lofi-dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.process-img {
  width: 100%;
  border-radius: 8px;
}

/* ─── STYLES / COLORS ───────────────────────────────────── */
.styles-container {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.color-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.color-block {
  height: 100px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #eee;
}

.hex-code {
  font-size: 14px;
  font-weight: 450;
  color: #000;
  text-align: center;
}

/* ─── HIFI GRID ─────────────────────────────────────────── */
.hifi-grid-6 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.hifi-grid-6 img {
  width: 100%;
  border-radius: 15px;
}

/* ─── RESULT ────────────────────────────────────────────── */
.result-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: start;
}

.result-video {
  width: 100%;
  border-radius: 12px;
}

.final-text {
  font-size: 18px;
  line-height: 1.7;
  text-align: justify;
  margin: 0;
}

/* ─── FOOTER ────────────────────────────────────────────── */
.case-footer {
  padding: 0 0 20px 0;
}

.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
}

.footer-link {
  font-size: 28px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-link:hover {
  opacity: 0.5;
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {

  .hero {
    margin-bottom: 40px;
    padding: 0 !important;
  }
  
  .project-intro-header h1 {
    font-size: 40px;
  }

  .case-section {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 70px;
  }

  .strategy-grid,
  .lofi-dual-grid,
  .result-layout {
    grid-template-columns: 1fr;
  }

  .hifi-grid-6 {
    grid-template-columns: repeat(2, 1fr);
  }

  .styles-container {
    flex-wrap: wrap;
  }

  .color-item {
    flex: 1 1 40%;
  }
}

@media (max-width: 500px) {
  .top-nav {
    padding: 20px 5%;
  }

  .back-btn {
    font-size: 18px;
  }

  .project-intro-header h1 {
    font-size: 30px;
  }

  .section-body p {
    font-size: 16px;
  }

  .vp-statement {
    font-size: 22px;
  }

  .hifi-grid-6 {
    grid-template-columns: 1fr;
  }

  .color-block {
    height: 70px;
  }

  .footer-link {
    font-size: 20px;
  }

  .pagination-wrapper {
    gap: 12px;
  }
}
</style>