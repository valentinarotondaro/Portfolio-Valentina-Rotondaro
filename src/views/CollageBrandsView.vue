<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="brands-page">

    <div class="back-wrap">
      <a href="/collage" class="back-link">← Back to Collage</a>
    </div>

    <section class="hero">
      <p class="hero-eyebrow">COLLAGE · PAPER ART · BRAND CAMPAIGNS</p>
      <h1 class="hero-title">Colorful brands<br>deserve <em>colorful art.</em></h1>
      <p class="hero-sub">Paper animations, illustrated collabs and product storytelling through handmade art. Let your brand stand out with something tactile and unexpected.</p>
      <a href="/contact" class="btn-pink">Let's work together</a>
    </section>

    <section class="services-section">
      <p class="section-label">WHAT I OFFER</p>
      <h2 class="section-title">Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <span class="service-icon">🎬</span>
          <h3 class="service-title">Paper Animation</h3>
          <p class="service-desc">Stop-motion and paper animation campaigns for product launches, social media and brand storytelling.</p>
        </div>
        <div class="service-card">
          <span class="service-icon">🎨</span>
          <h3 class="service-title">Brand Illustration</h3>
          <p class="service-desc">Custom collage illustrations for packaging, editorial, campaigns and brand identity projects.</p>
        </div>
        <div class="service-card">
          <span class="service-icon">👕</span>
          <h3 class="service-title">Art Licensing</h3>
          <p class="service-desc">License my collage art for merchandise, apparel, stationery, puzzles and more.</p>
        </div>
        <div class="service-card">
          <span class="service-icon">📦</span>
          <h3 class="service-title">Product Storytelling</h3>
          <p class="service-desc">Creative campaigns that use handmade art to tell your product story in an analog, human way.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2 class="cta-title">Want your brand<br>to look like this?</h2>
      <p class="cta-sub">I would love to fill this world with colorful products!</p>
      <a href="/contact" class="workhome-link">Let's talk!</a>
    </section>

  </div>
</template>

<style scoped>

.brands-page {
  font-family: 'BethanyElingston', sans-serif;
  background: #fff;
  color: #111;
  overflow-x: hidden;
}

.back-wrap {
  padding: 24px 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover { color: #FF7BB5; }

.hero {
  padding: 40px 5% 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #999;
  margin: 0 0 20px 0;
}

.hero-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(44px, 6vw, 80px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 24px 0;
}

.hero-title em {
  font-style: italic;
  color: #FF7BB5;
}

.hero-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: #555;
  margin: 0 0 36px 0;
  max-width: 560px;
}

.services-section {
  padding: 80px 5%;
  background: #FBFAE6;
}

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #999;
  margin: 0 0 12px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 48px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: #fff;
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s;
}

.service-card:hover { transform: translateY(-4px); }

.service-icon { font-size: 36px; }

.service-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 26px;
  font-weight: 400;
  color: #111;
  margin: 0;
}

.service-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

.cta-section {
  padding: 100px 5%;
  text-align: center;
  background: #fff;
}

.cta-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(44px, 6vw, 80px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: black;
  margin: 0 0 16px 0;
}

.cta-sub {
  font-family: 'MyFont', sans-serif;
  font-size: 40px;
  color: black;
  margin: 0 0 32px 0;
  text-transform: uppercase;
}

.workhome-link {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(44px, 6vw, 80px);
  color: #FF7BB5;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.btn-pink {
  display: inline-block;
  padding: 14px 32px;
  background: #D9FB60;
  color: #111;
  border: none;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s;
}
.btn-pink:hover { transform: scale(1.04); }

@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>