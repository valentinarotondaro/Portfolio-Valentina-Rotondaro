<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

// ─── NAVIGATION ───────────────────────────────────────────
const activeSection = ref('art');

const scrollToSection = (id) => {
  activeSection.value = id;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ─── CAROUSEL ─────────────────────────────────────────────
const currentSlide = ref(0);
let autoplayInterval = null;

const pastWorkshops = [
  { img: '/img/collage (4).JPG',   title: 'Collage & Tarot',         location: 'Aarhus' },
  { img: '/img/collage (2).JPG',   title: 'Monochromatic Collage',   location: 'Royal Danish Library' },
  { img: '/img/collage (5).jpg',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/collage (11).JPEG', title: 'Collage Workshop',        location: 'Esbjerg' },
  { img: '/img/collage (1).jpg',   title: 'Painting Session',        location: 'Aarhus' },
  { img: '/img/collage (8).jpg',   title: 'Pop-up cards Workshop',   location: 'Aarhus' },
  { img: '/img/collage (9).jpg',   title: 'Collage & Tarot',         location: 'Aarhus' },
  { img: '/img/proyecto8.jpg',     title: 'Monochromatic Collage',   location: 'Royal Danish Library' },
  { img: '/img/Collageandmigrantemotions.jpg', title: 'Collage & Migrant Emotions', location: 'Aarhus' },
  { img: '/img/collage (7).JPG',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/CollageworkshopAarhusCityWelcome.JPG', title: 'City Welcome Workshop', location: 'Aarhus' },
];

const visibleCount = 3;

const nextSlide = () => {
  currentSlide.value = currentSlide.value < pastWorkshops.length - visibleCount
    ? currentSlide.value + 1
    : 0;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value > 0
    ? currentSlide.value - 1
    : pastWorkshops.length - visibleCount;
};

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 3500);
});

onUnmounted(() => {
  clearInterval(autoplayInterval);
});

// ─── INSTAGRAM ────────────────────────────────────────────

const instaPosts = [
  { id: '17978620920050587', permalink: 'https://www.instagram.com/reel/DaVKDUwoys_/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzk3ODYyMDkyMDA1MDU4NyIsImgiOiIxZmExcmFzIn0.jpg?class=originalMedium', caption: 'un picnic creativo en papel🧚🧺🥖🧉💐', isReel: true },
  { id: '18047996162789895', permalink: 'https://www.instagram.com/reel/DaLWd63o3Xl/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODA0Nzk5NjE2Mjc4OTg5NSIsImgiOiIyemk4ZW8ifQ.jpg?class=originalMedium', caption: 'Personalizando todo lo que se me atraviese siempre!💌❤️‍🔥🌞🖇️', isReel: true },
  { id: '18107634158318774', permalink: 'https://www.instagram.com/p/DaD7D7MChAZ/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEwNzYzNDE1ODMxODc3NCIsImgiOiIxYnhzMnpmIn0.jpg?class=originalMedium', caption: 'un carrete de verano🪭🧚‍♀️🌞', isReel: false },
  { id: '18127470532712348', permalink: 'https://www.instagram.com/reel/DZ3Nm45oGnw/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyNzQ3MDUzMjcxMjM0OCIsImgiOiIxMHVnM3U5In0.jpg?class=originalMedium', caption: 'Cruzando a la isla de Fanø, un cuentito💌🌞⛴️', isReel: true },
  { id: '18135789370601428', permalink: 'https://www.instagram.com/reel/DZvX574IdBw/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEzNTc4OTM3MDYwMTQyOCIsImgiOiJxOWVubjQifQ.jpg?class=originalMedium', caption: 'Mis bienes🙂‍↔️💰🪎❤️‍🔥', isReel: true },
];
// ─── NEWSLETTER ───────────────────────────────────────────
const emailInput = ref('');
const subscribed = ref(false);

const handleNewsletter = () => {
  if (emailInput.value) subscribed.value = true;
};

// ─── WORKSHOPS DATA ───────────────────────────────────────
const upcomingWorkshops = [
  { title: 'Collage Workshop', date: 'September 2026', location: 'Aarhus, Denmark',  description: 'Free, but you need to sign up', tag: 'Coming soon' },
  { title: 'Collage Workshop', date: 'September 2026', location: 'Esbjerg, Denmark', description: 'Free, but you need to sign up', tag: 'Coming soon' },
];
</script>

<template>
    
  <div class="collage-page">

      

    <!-- ═══════════════════════════════════════════════
         SECTION 1 — COLLAGE ART
    ════════════════════════════════════════════════ -->
    <section class="page-section" id="art">
        <div class="back-wrap">
  <router-link to="/collage" class="back-link">&lt; Back to Collage</router-link>
</div>

      <!-- Artworks grid -->
      <h2 class="section-handwritten">COLLAGE ARTWORKS</h2>
      <div class="artworks-grid">
        <div class="artwork-item">
          <img src="/img/collageart1.jpg" alt="Collage artwork 1" class="artwork-img" />
        </div>
        <div class="artwork-item">
          <img src="/img/collageart2.png" alt="Collage artwork 2" class="artwork-img" />
        </div>
        <div class="artwork-item">
          <img src="/img/collageart3.jpg" alt="Collage artwork 3" class="artwork-img" />
        </div>
        
      </div>
    

      <!-- My art on products -->
      <h2 class="section-handwritten">MY ART APPLIED ON PRODUCTS</h2>
      <div class="products-grid">
        <div class="product-item product-item--tall">
          <img src="/img/fundamockup.png" alt="Art on product" class="product-img" />
        </div>
        <div class="product-item">
          <img src="/img/pantalon.png" alt="Art on product" class="product-img" />
        </div>
        <div class="product-item">
          <img src="/img/examplewashi.png" alt="Art on product" class="product-img" />
        </div>
      </div>

      <!-- Work with me CTA -->
      <div class="workhome-cta-wrap">
        <div class="workhome-cta-inner">
          <h3 class="workhome-title">Want your brand<br>look like this?</h3>
          <br>
          <a href="/contact" class="workhome-link">Let's talk!</a>
        </div>
        <img src="/img/fundamockup.png" alt="" class="workhome-img" />
      </div>
</section>
  </div>
  
</template>

<style scoped>


.back-link {
  font-size: 20px;
  font-weight: 450;
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 1;
  color:#FF7BB5;
}

/* ─── BASE ───────────────────────────────────────────────── */
.collage-page {
  font-family: 'BethanyElingston', sans-serif;
  background: white;
  color: black;
  overflow-x: hidden;
}

/* ─── HERO ───────────────────────────────────────────────── */
.hero {
  padding: 60px 5% 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-eyebrow {
  font-family: 'myfont', sans-serif !important;
  font-size: 50px;
  color: black;
  margin-bottom: 40px;
}

.hero-title-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 48px;
}

.hero-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(45px, 8vw, 96px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: black;
  margin: 0;
}

/* decorative stickers */
.deco-washitape {
  position: absolute;
  width: 140px;
  top: -90px;
  left: -120px;
  transform: rotate(-8deg);
}

.deco-star-tl {
  position: absolute;
  width: 90px;
  top: -80px;
  right: -40px;
}

.deco-smiley {
  position: absolute;
  width: 52px;
  top: 70px;
  right: -70px;
}

.deco-note {
  position: absolute;
  width: 140px;
  bottom: -100px;
  right: -10px;
  transform: rotate(15deg);
}

.deco-star-br {
  position: absolute;
  width: 130px;
  bottom: -20px;
  right: 500px;
}

.hero-arrow {
  width: 70px;
  height: auto;
  margin-bottom: 56px;
  opacity: 100%;
}

/* ─── HERO NAV (3 icons) ─────────────────────────────────── */
.hero-nav {
  display: flex;
  gap: 80px;
  align-items: flex-start;
  justify-content: center;
}

.hero-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(22px, 3vw, 30px);
  color: black;
  line-height: 1.2;
  text-align: center;
  opacity: 100%;
  transition: opacity 0.2s ease;
}

.hero-nav-item:hover,
.hero-nav-item.active {
  opacity: 1;
}

.hero-nav-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

/* ─── SECTION WRAPPER ────────────────────────────────────── */
.page-section {
  padding: 80px 5% 0;
  max-width: 1200px;
  margin: 0 auto;
}
/* ─── HANDWRITTEN SECTION TITLES ─────────────────────────── */
.section-handwritten {
  font-family: 'MyFont', sans-serif !important;
  font-size: clamp(65px, 2.5vw, 26px);
  font-weight: 400;
  color: black;
}

/* ─── COLLAGE ARTWORKS GRID ──────────────────────────────── */
.artworks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
  margin-bottom: 80px;
  margin-top: 40px;
}

.artwork-item:nth-child(1) { grid-column: 1; grid-row: 1; }
.artwork-item:nth-child(2) { grid-column: 2; grid-row: 1; }
.artwork-item:nth-child(3) { grid-column: 3; grid-row: 1; }
.artwork-item:nth-child(4) { grid-column: 2; grid-row: 2; }
.artwork-item:nth-child(5) { grid-column: 3; grid-row: 2; }
.artwork-item:nth-child(6) { grid-column: 1; grid-row: 2; }

.artwork-item {
  overflow: hidden;
  border-radius: 16px;
}

.artwork-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}


.artwork-img:hover {
  transform: scale(1.03);
}
/* ─── PRODUCTS GRID ──────────────────────────────────────── */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 80px;
}

.product-item:nth-child(1) { grid-column: 1; grid-row: 1; }
.product-item:nth-child(2) { grid-column: 2; grid-row: 1; }
.product-item:nth-child(3) { grid-column: 3; grid-row: 1; }
.product-item:nth-child(4) { grid-column: 2; grid-row: 2; }
.product-item:nth-child(5) { grid-column: 3; grid-row: 2; }
.product-item:nth-child(6) { grid-column: 1; grid-row: 2; }

.product-item {
  overflow: hidden;
  border-radius: 12px;
}

.product-item--tall {
  grid-row: span 2;
  aspect-ratio: 3/4;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  transition: transform 0.4s ease;
}

.product-img:hover {
  transform: scale(1.02);
}

/* ─── WORK WITH ME CTA ───────────────────────────────────── */
.workhome-cta-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-top:160px;  
  margin-bottom: 100px;
}

.workhome-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 20px 0;
}


.workhome-link {
  font-size: clamp(22px, 3vw, 30px);
  color: #FF7BB5;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.workhome-img {
  width: 100%;
  aspect-ratio: 4/4;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── FREE RESOURCES ─────────────────────────────────────── */
.resources-section {
  padding: 80px 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 32px 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.resource-img {
  width: 160px;
  height: auto;
  object-fit: contain;
}

.resource-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #111;
  margin: 0;
}

/* ─── WORKSHOPS ──────────────────────────────────────────── */
.workshops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.workshop-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  align-items: stretch;
}

.workshop-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 0;
}

.workshop-content {
  position: relative;
  z-index: 1;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

.workshop-tag {
  display: inline-block;
  background: #D9FB60;
  color: #333;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 50px;
  width: fit-content;
}

.workshop-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 28px;
  font-weight: 400;
  margin: 0;
}

.workshop-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #111;
}

.workshops-private-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  color: #111;
  text-align: center;
  margin-top: 16px;
}

.inline-link {
  color: #FF7BB5;
  text-decoration: none;
}
.inline-link:hover { text-decoration: underline; }

/* ─── CAROUSEL ───────────────────────────────────────────── */
.carousel-outer {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 16px;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-slide {
  min-width: calc(33.333% - 11px);
  max-width: calc(33.333% - 11px);
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.carousel-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}

.carousel-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
}

.carousel-btn {
  background: #fff;
  color: #111;
  border: 2px solid #111;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.carousel-btn:hover {
  background: #D9FB60;
  border-color: #D9FB60;
}

/* ─── REVIEWS ────────────────────────────────────────────── */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.review-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.review-blob-wrap {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.review-blob {
  width: 100%;
  height: auto;
  display: block;
}

.review-blob-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  text-align: center;
  width: 80%;
}

.review-text {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(16px, 2vw, 22px);
  line-height: 1.5;
  color: #111;
  margin: 0;
}

.review-author {
  font-family: 'MyFont', sans-serif !important;
  font-size: 28px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #111;
}

/* ─── NEWSLETTER ─────────────────────────────────────────── */
.newsletter-section {
  background: #FFC7EA;
  border-radius: 24px;
  padding: 80px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 80px;
}

.nl-scissors {
  position: absolute;
  width: 70px;
  top: 20px;
  left: 5%;
  transform: rotate(200deg);
}

.nl-clips {
  position: absolute;
  width: 55px;
  bottom: 20px;
  right: 4%;
}

.newsletter-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 16px 0;
}

.newsletter-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: #333;
  margin: 0 0 32px 0;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.nl-input {
  padding: 14px 24px;
  border: 2px solid #111;
  border-radius: 50px;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  background: #fff;
  outline: none;
  width: 280px;
}

.nl-input:focus { border-color: #FF7BB5; }

.newsletter-thanks p {
  font-family: 'DM Sans', sans-serif;
  font-size: 22px;
  color: #111;
}

/* ─── BUTTONS ────────────────────────────────────────────── */
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
  transition: transform 0.2s;
}
.btn-pink:hover { transform: scale(1.04); }

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
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}
.btn-outline:hover { background: #D9FB60; border-color: #D9FB60; }

/* ─── RESPONSIVE ─────────────────────────────────────────── */

/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .page-section {
    padding: 40px 5% 0;
  }

  .section-handwritten {
    font-size: 32px;
  }

  /* ARTWORKS GRID */
  .artworks-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 48px;
  }

  .artwork-item {
    grid-column: 1 !important;
    grid-row: auto !important;
  }

  /* PRODUCTS GRID */
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 48px;
  }

  .product-item {
    grid-column: 1 !important;
    grid-row: auto !important;
  }

  .product-item--tall {
    grid-row: auto !important;
    aspect-ratio: 4/5;
  }

  /* WORK WITH ME CTA */
  .workhome-cta-wrap {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: center;
  }

  /* INSTAGRAM */
  .insta-eyebrow {
    font-size: 28px;
    margin-left: 0;
  }

  .insta-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 500px) {
  .section-handwritten {
    font-size: 26px;
  }

  .insta-eyebrow {
    font-size: 22px;
  }

  .insta-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>