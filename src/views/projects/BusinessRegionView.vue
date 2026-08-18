<script setup>
import ProjectFooter from './ProjectFooter.vue';
</script>

<template>
  <div class="case-study">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">WEB DESIGN</span>
        <h1>Business DE-DK. Website redesign</h1>
      </header>

      <section class="hero">
        <img src="/img/businessregionhero.webp" alt="Business DE-DK Redesign" class="main-hero-img" />
      </section>

      <section class="case-study-content">

        <div class="case-section">
          <h2 class="section-label">CONTEXT</h2>
          <div class="section-body">
            <p>Business DE-DK is an Interreg-funded cross-border project based in Tønder, connecting businesses and job seekers across the German-Danish border. Originally launched as business-region.eu, we redesigned and rebuilt the platform's digital presence end to end as our second-semester exam project, working within the client's real budget constraints.</p>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">VALUE PROPOSITION</h2>
          <div class="section-body">
            <h3 class="vp-statement">"We help German and Danish businesses and job seekers connect across the border by providing a multilingual, easy-to-navigate hub for cross-border recruitment and partnership opportunities."</h3>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">APPROACH &amp; STACK</h2>
          <div class="section-body">
            <div class="strategy-grid">
              <div class="strategy-card">
                <h4>Approach</h4>
                <p>Double Diamond design process combined with Scrum, working within the client's real budget constraints.</p>
              </div>
              <div class="strategy-card">
                <h4>Tech Stack</h4>
                <p>Headless WordPress (ACF + WPGraphQL) paired with a Vue 3 + Vite frontend, styled with Tailwind CSS and hosted on Firebase.</p>
              </div>
              <div class="strategy-card">
                <h4>Languages</h4>
                <p>Trilingual SEO and content system in Danish, German and English, built with a centralized translation function.</p>
              </div>
              <div class="strategy-card">
                <h4>Key Focus</h4>
                <p>Improving cross-border recruitment visibility and partnership opportunities in the German-Danish border region.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">USER STORIES</h2>
          <div class="section-body">
            <div class="user-story-item">
              <span class="story-role">As a Job Seeker,</span>
              <p>"I want to browse cross-border job listings in my own language so that I can find opportunities without a language barrier."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a Local Business,</span>
              <p>"I want visibility on a trusted regional platform so that I can find partners and talent across the border."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As an Event Organizer,</span>
              <p>"I want an easy way to publish bilingual event listings so that attendees on both sides of the border can find them."</p>
            </div>
            <div class="user-story-item">
              <span class="story-role">As a Site Editor,</span>
              <p>"I want a headless CMS I can update without touching code so that content stays fresh without developer support."</p>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">PROCESS</h2>
          <div class="section-body">
            <h4 class="sub-label">LOFI</h4>
            <div class="process-block">
              <img src="/img/businessregionlofi.jpeg" alt="Lofi sketch" class="process-img" />
            </div>

            <h4 class="sub-label">ORCA</h4>
            <div class="process-block">
              <img src="/img/businessregionorca.jpeg" alt="Orca board" class="process-img" />
            </div>

            <h4 class="sub-label">PRODUCTION-READY DESIGNS</h4>
            <div class="hifi-grid-4">
              <div class="hifi-item">
                <img src="/img/businessregionrollup.png" alt="Roll-up banner" />
              </div>
              <div class="hifi-item">
                <img src="/img/businessregionflyer.png" alt="Flyer" />
              </div>
              <div class="hifi-item">
                <img src="/img/businessregionid.png" class="hifi-imgid" alt="Business card" />
              </div>
              <div class="hifi-item">
                <img src="/img/businessregiontherm.png" alt="Coffee mug" />
              </div>
            </div>
          </div>
        </div>

        <div class="case-section">
          <h2 class="section-label">TEAM</h2>
          <div class="section-body">
            <img src="/img/businessregionteam.jpg" alt="Business DE-DK team" class="team-photo" />
<p>Meet the incredible team behind this project: Facundo Ayala, Alexa Cattaneo Piazza and Lucas Almeida. I feel really lucky to have worked with them.</p>          </div>
        </div>

        <div class="case-section">
  <h2 class="section-label">SOCIAL MEDIA</h2>
  <div class="section-body">
    <p>Alongside the website, we developed a trilingual social media content strategy for LinkedIn and Instagram, using a Hook–Value–CTA–Hashtags framework to boost engagement.</p>
    <img src="/img/businessregionfeed.png" alt="Social media feed" class="social-feed-img" />
  </div>
</div>

<div class="case-section">
  <h2 class="section-label">SOME POST SUGGESTIONS</h2>
  <div class="section-body">
    <div class="social-grid">
      <img src="/img/businessregionpost1.png" alt="Social media post 1" class="social-img" />
      <img src="/img/businessregionpost2.png" alt="Social media post 2" class="social-img" />
      <img src="/img/businessregionpost3.png" alt="Social media post 3" class="social-img" />
    </div>
  </div>
</div>

      <div class="case-section">
  <h2 class="section-label">DELIVERABLES</h2>
  <div class="section-body">
    <div class="deliverables-list">
      <a href="/pdfs/BusinessDEDKSoMeandSEOguide.pdf" target="_blank" rel="noopener" class="deliverable-link">↗ SoMe & SEO Guide</a>
      <a href="/pdfs/BusinessDEDKContentmanagmentmanual.pdf" target="_blank" rel="noopener" class="deliverable-link">↗ Content Management Manual</a>
    </div>
  </div>
</div>

<div class="case-section">
  <h2 class="section-label">BEFORE / AFTER</h2>
  <div class="section-body">

    <div class="ba-pair">
      <div class="ba-item">
        <span class="ba-tag">BEFORE</span>
        <img src="/img/beforeI.png" alt="Old hero section" class="ba-img" />
        <p class="ba-caption">The old hero section had no clear value proposition, and only offered two languages to translate, without English, despite international professionals being a key customer segment.</p>
      </div>
      <div class="ba-item">
        <span class="ba-tag">AFTER</span>
        <img src="/img/afterI.png" alt="New hero section" class="ba-img" />
        <p class="ba-caption">The redesigned hero section has a clear, visible value proposition, an easy-to-navigate menu, and the ability to browse the site in three languages.</p>
      </div>
    </div>

    <div class="ba-pair">
      <div class="ba-item">
        <span class="ba-tag">BEFORE</span>
        <img src="/img/beforeII.png" alt="Old events section" class="ba-img" />
        <p class="ba-caption">The old events section listed items in a plain, unfiltered list with no way to search or filter by language, type, or date, making it hard for busy professionals to find relevant opportunities.</p>
      </div>
      <div class="ba-item">
        <span class="ba-tag">AFTER</span>
        <img src="/img/afterII.png" alt="New events section" class="ba-img" />
        <p class="ba-caption">The redesigned events page includes clear filters (language, event type, date range) and a search bar, helping cross-border job seekers and businesses quickly find events relevant to them.</p>
      </div>
    </div>

    <div class="ba-pair">
      <div class="ba-item">
        <span class="ba-tag">BEFORE</span>
        <img src="/img/beforeIII.png" alt="Old resources section" class="ba-img" />
<p class="ba-caption">The old resources page was overloaded with text, and the newsletter sign-up went completely unnoticed among all that informational content.</p>      </div>
      <div class="ba-item">
        <span class="ba-tag">AFTER</span>
        <img src="/img/afterIII.png" alt="New resources section" class="ba-img" />
        <p class="ba-caption">The new resources page organizes content into clear categories with a responsive, mobile-first layout, so users can browse cross-border business guides from any device.</p>
      </div>
    </div>

  </div>
</div>

   <div class="case-section">
  <h2 class="section-label">RESULT</h2>
  <div class="section-body">
    <video autoplay loop muted playsinline class="result-video">
      <source :src="'/img/businessregionvideo.mp4'" type="video/mp4" />
    </video>
    <p class="final-text">Across this project we moved through the full Double Diamond process, from early lofi sketches and card-sorting sessions to a fully bilingual, production-ready platform. Working within the client's real budget as a team of four, using Scrum to manage our sprints, we rebuilt the site on a headless WordPress and Vue 3 architecture and layered a trilingual SEO and content strategy on top of it. Alongside the website, we designed a full suite of print and digital materials, from business cards to social content, so the client had a consistent brand presence everywhere their audience found them.</p>
    <a href="https://businessdedk.web.app/en" target="_blank" rel="noopener" class="btn-outline result-btn">Visit live site ↗</a>

</div>
</div>

      </section>

    <ProjectFooter next-to="/portfolio/departamentos-alfar" />

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
  color: #1a1333;
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
  border-left: 3px solid #1a1333;
  padding-left: 20px;
}

.story-role {
  font-weight: 700;
  font-size: 13px;
  color: #1a1333;
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

.process-block {
  margin-bottom: 20px;
}

.process-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

/* ─── HIFI GRID ─────────────────────────────────────────── */
.hifi-grid-4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.hifi-item {
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 4 / 5;
}

.hifi-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;   /* ← agregá esta línea */
}

.hifi-item-id {
  border-radius: 15px !important;
  overflow: hidden !important;
  display: block !important;
}

/* ─── TEAM ──────────────────────────────────────────────── */
.team-photo {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  display: block;
  aspect-ratio: 4 / 3;     
  object-fit: cover;
}

/* ─── SOCIAL MEDIA ──────────────────────────────────────── */
.social-feed-img {
  width: 100%;
  border-radius: 10px;
  display: block;
  margin-top: 24px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.social-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

/* ─── DELIVERABLES ──────────────────────────────────────── */
.deliverables-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.deliverable-link {
  font-size: 19px;
  color: #1a1333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.deliverable-link:hover {
  color: #999;
}

/* ─── BEFORE / AFTER ────────────────────────────────────── */
.ba-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

.ba-pair:last-child {
  margin-bottom: 0;
}

.ba-item {
  display: flex;
  flex-direction: column;
}

.ba-tag {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #1a1333;
  margin-bottom: 10px;
}

.ba-img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-bottom: 12px;
}

.ba-caption {
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  text-align: left;
  margin: 0;
}

/* ─── RESULT ────────────────────────────────────────────── */
.result-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: start;
}

.video-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.result-video {
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 16px;
}

.result-btn {
  display: inline-block;
  margin: 24px 0 0 0;
  text-decoration: none;
}

.final-text {
  font-size: 18px;
  line-height: 1.7;
  text-align: justify;
  margin: 0;
}

/* ─── BUTTON ────────────────────────────────────────────── */
.btn-outline {
  display: inline-block;
  padding: 11px 22px;
  background: transparent;
  color: #111;
  border: 2px solid #111;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.btn-outline:hover { background: #1a1333; border-color: #1a1333; color: #fff; }



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
  .result-layout {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ba-pair {
  grid-template-columns: 1fr;
  gap: 16px;
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

  .hifi-grid-4 {
    grid-template-columns: 1fr;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .social-img--wide {
    grid-column: span 1;
  }

}
</style>