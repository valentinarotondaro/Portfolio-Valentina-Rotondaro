<template>
  <div class="case-study">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">WEB DESIGN</span>
        <h1>Departamentos Alfar. Website dev.</h1>
      </header>

      <section class="hero">
        <img src="/img/alfarhero.webp" alt="Departamentos Alfar" class="main-hero-img" />
      </section>
      

      <section class="case-study-content">

        <div class="case-section">
          <h2 class="section-label">CONTEXT</h2>
          <div class="section-body">
            <p>Departamentos Alfar is a family-run complex of 8 apartments in the Alfar neighborhood of Mar del Plata, Argentina, administered by my mum Cris. Before this site existed, every question, availability, amenities, prices, the story behind the place, had to go through WhatsApp, one message at a time. I designed and built a site to give guests clarity about the facilities, answers to frequently asked questions, and a bit of the history behind the apartments before they ever need to send that first message.</p>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">VALUE PROPOSITION</h2>
          <div class="section-body">
            <h3 class="vp-statement">"We help guests feel confident booking their stay by giving them everything they need to know upfront, so that first WhatsApp message is about confirming a reservation, not asking the basics."</h3>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">APPROACH &amp; STACK</h2>
          <div class="section-body">
            <div class="strategy-grid">
              <div class="strategy-card">
                <h4>Approach</h4>
                <p>Designed and built solo, end to end, for a real family business, from research and content structure to the final deploy.</p>
              </div>
              <div class="strategy-card">
                <h4>Tech Stack</h4>
                <p>Vue 3 + Tailwind CSS, hosted on Firebase, with automatic deploys connected to GitHub Actions.</p>
              </div>
              <div class="strategy-card">
                <h4>Content</h4>
                <p>All 8 apartments (Faro, Alfonsina, Casino, Rambla, Acantilados, Mogotes, El Pato, Los Lobos) shown with real photos, capacity, amenities and live availability.</p>
              </div>
              <div class="strategy-card">
                <h4>Key Focus</h4>
                <p>Reducing repetitive WhatsApp questions by surfacing FAQs, policies, and location info directly on the site.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">USER STORIES</h2>
          <div class="section-body">
            <div class="user-story-item">
              <span class="story-role">As a Potential Guest,</span>
              <p>"I want to see real photos and details of each apartment so that I can pick the one that fits my group before reaching out."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a First-Time Visitor,</span>
              <p>"I want to know the booking policies (deposit, check-in/out, pets) upfront so that I know exactly what to expect before I commit."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As Cris (the host),</span>
              <p>"I want fewer repetitive questions on WhatsApp so that I can focus my time on guests who are ready to book."</p>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">KEY FEATURES</h2>
          <div class="section-body">
            <div class="strategy-grid">
              <div class="strategy-card">
                <h4>Our Story</h4>
                <p>A dedicated section telling the story of the family behind Alfar, from the original builders to Cris, who runs it today.</p>
              </div>
              <div class="strategy-card">
                <h4>The 8 Apartments</h4>
                <p>A single filterable listing, each with photos, capacity, wifi, parking, and a WhatsApp button pre-filled with the apartment number.</p>
              </div>
              <div class="strategy-card">
                <h4>Amenities &amp; Location</h4>
                <p>Shared amenities (grill, common areas, parking) plus a map with nearby spots, all a short walk from the beach.</p>
              </div>
              <div class="strategy-card">
                <h4>Reviews &amp; FAQ</h4>
                <p>Real guest reviews alongside a dedicated FAQ section covering booking policy, deposits, pets, and check-in/out times.</p>
              </div>
            </div>
          </div>
        </div>

  <div class="case-section">
  <h2 class="section-label">RESULT</h2>
  <div class="section-body">
    <video autoplay loop muted playsinline class="result-video">
      <source :src="'/img/alfarvideo.mp4'" type="video/mp4" />
    </video>
    <p class="final-text">The final site gives Departamentos Alfar a real digital front door, guests arrive already informed about the apartments, the policies, and the story behind the place, and Cris spends less time answering the same questions over and over on WhatsApp. Since it's a real, ongoing family project, the site keeps evolving with new sections as the business grows.</p>
    <a href="https://www.departamentosalfarmdp.com.ar" target="_blank" rel="noopener" class="btn-outline result-btn">Visit live site ↗</a>
  </div>
</div>

      </section>

      <footer class="case-footer">
        <div class="pagination-wrapper">
          <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
          <router-link to="/portfolio/amada-amiga" class="footer-link">Next project &gt;</router-link>
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
  opacity: 1;
  color: #FF7BB5;
}

/* ─── HEADER ────────────────────────────────────────────── */
.project-intro-header {
  margin-top: 40px;
  margin-bottom: 40px;
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
  font-size: 56px;
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
  color: #2a27c1;
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
  border-left: 3px solid #2a27c1;
  padding-left: 20px;
}

.story-role {
  font-weight: 700;
  font-size: 13px;
  color: #2a27c1;
  text-transform: uppercase;
  display: block;
  margin-bottom: 5px;
}

/* ─── RESULT ────────────────────────────────────────────── */
.section-body .final-text {
  font-size: 18px;
  line-height: 1.7;
  margin: 30px 0;
  text-align: justify;
}
.result-video {
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 16px;
}

.btn-outline {
  display: inline-block;
  padding: 11px 22px;
  background: transparent;
  color: #111;
  border: 2px solid #111;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.btn-outline:hover {
  background: #2a27c1;
  border-color: #2a27c1;
  color: #fff;
}

.result-btn {
  text-decoration: none;
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

  .project-intro-header h1 {
    font-size: 38px;
  }

  .case-section {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 70px;
  }

  .strategy-grid {
    grid-template-columns: 1fr;
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
    font-size: 28px;
  }

  .section-body p {
    font-size: 16px;
  }

  .vp-statement {
    font-size: 22px;
  }

  .footer-link {
    font-size: 20px;
  }
}
</style>