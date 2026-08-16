<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// ─── TESTIMONIALS ──────────────────────────────────────────
const testimonials = [
  { quote: "Thank you for this marvelous and creative event that brings people together, nurtures, and inspires!", author: "Marisol, Argentina" },
  { quote: "Lovely experience to meet new faces and make art! Can't wait for the next one!", author: "Habiba, Egypt" },
  { quote: "The atmosphere was perfectly curated for meeting wonderful people and enjoy the creative process!", author: "Camelia, France" },
];
const currentTestimonial = ref(0);
const prevTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value > 0 ? currentTestimonial.value - 1 : testimonials.length - 1;
};
const nextTestimonial = () => {
  currentTestimonial.value = currentTestimonial.value < testimonials.length - 1 ? currentTestimonial.value + 1 : 0;
};

// ─── MEMORIES AUTO-SCROLL ──────────────────────────────────
const memoryOffset = ref(0);
let memoryInterval = null;

// ─── MEMORY POPUP ──────────────────────────────────────────
const memoryPopup = ref(null);
const openMemory = (item) => { memoryPopup.value = item; };
const closeMemory = () => { memoryPopup.value = null; };

const pastWorkshops = [
  { img: '/img/collage (4).JPG',   title: 'Collage & Tarot',         location: 'Aarhus' },
  { img: '/img/collage (2).JPG',   title: 'Collage Afternoon',   location: 'DOKK1, Aarhus' },
  { img: '/img/collage (5).jpg',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/collagesome.jpg',   title: 'Collage and Migrant Emotions',        location: 'Aarhus' },
  { img: '/img/collage (1).jpg',   title: 'Painting Session',        location: 'Aarhus' },
  { img: '/img/collage (8).jpg',   title: 'Pop-up cards Workshop',   location: 'Aarhus' },
  { img: '/img/collage (12).jpeg',   title: 'Collage Workshop',         location: 'Royal Danish Library' },
  { img: '/img/proyecto8.jpeg',     title: 'Collage Afternoon',   location: 'Royal Danish Library' },
  { img: '/img/collage-final-works.JPG', title: 'Collage Afternoon', location: 'DOKK1, Aarhus' },
  { img: '/img/collage (7).JPG',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/CollageworkshopAarhusCityWelcome.JPG', title: 'Aarhus City Welcome Workshop' },
  { img: '/img/monochromatic.JPEG', title: 'Monochromatic Collage Workshop', location: 'Royal Danish Library' },
];

onMounted(() => {
  memoryInterval = setInterval(() => {
    memoryOffset.value += 0.5;
    if (memoryOffset.value >= (pastWorkshops.length * 296)) {
      memoryOffset.value = 0;
    }
  }, 16);
});
onUnmounted(() => {
  clearInterval(memoryInterval);
});

// ─── NEWSLETTER ───────────────────────────────────────────
const emailInput = ref('');
const subscribed = ref(false);
const handleNewsletter = () => {
  if (emailInput.value) subscribed.value = true;
};

// ─── UPCOMING WORKSHOPS ───────────────────────────────────
const upcomingWorkshops = [
  { title: 'Collage Workshop', date: 'September 2026', location: 'Aarhus, Denmark', description: 'Free, but you need to sign up', tag: 'Coming soon' },
  { title: 'Collage Workshop', date: 'September 2026', location: 'Esbjerg, Denmark', description: 'Free, but you need to sign up', tag: 'Coming soon' },
];
</script>

<template>
  <div class="collage-page">

    <!-- ─── HERO ──────────────────────────────────────────── -->
    <section class="hero">
      <p class="hero-eyebrow">COLLAGE CRAFTS WORKSHOPS BRAND CAMPAIGNS</p>
      <div class="hero-title-wrap">
        <img src="/img/washitape.png"  alt="" class="deco-washitape" />
        <img src="/img/herostar.png"   alt="" class="deco-star-tl" />
        <h1 class="hero-title">Where paper meets<br>possibility</h1>
        <img src="/img/smileyface.png" alt="" class="deco-smiley" />
        <img src="/img/heronote.png"   alt="" class="deco-note" />
        <img src="/img/starpink.png"   alt="" class="deco-star-br" />
      </div>
    </section>

    <!-- ─── VALEN BIO (reposicionada arriba del todo) ───────── -->
    <section class="vb-section">
      <div class="vb-inner">
        <div class="vb-left">
          <img src="/img/washitape.png" alt="" class="vb-tape" />
          <div class="vb-polaroid">
            <img src="/img/valpolaroid.png" alt="Valen" class="vb-polaroid-img" />
          </div>
        </div>
        <div class="vb-right">
          <div class="vb-note-text">
            <p>Hi! I'm Valen</p>
            <p>Ever since I can remember, I've had some kind of scissors in my hand.</p>
            <p>Today, I host workshops all about connection and playful creativity, and I create paper pieces that tell stories, bringing little ideas to life, one cut at a time.  </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SERVICES ─────────────────────────────────────── -->
    <section class="services-section">
      <p class="svc-label">WHAT I OFFER</p>
      <h2 class="svc-title">Services</h2>
      <div class="services-grid">
    
        <div class="service-card">
          <div class="service-img-wrap">
            <img src="/img/collageservice.webp" alt="Brand Illustration" class="service-img" />
            <img src="/img/Collageafternoondokk1.webp" alt="Collage Workshops hover" class="service-img service-img--hover" />
          </div>
            <h3 class="service-title">Collage Workshops</h3>
          <p class="service-desc">Hands-on workshops exploring creativity, storytelling, and self-expression.</p>
        <a href="/contact" class="btn-green service-cta">Let's make this happen</a>
        </div>
        <div class="service-card">
          <div class="service-img-wrap">
  <img src="/img/productstorytelling.webp" alt="Product Storytelling" class="service-img service-img--base" />
  <img src="/img/brandillustration.webp" alt="Product Storytelling hover" class="service-img service-img--hover" />
</div>
          <h3 class="service-title">Product Storytelling</h3>
          <p class="service-desc">Creative campaigns that use handmade art to tell your product story in an analog, human way.</p>
        <a href="/contact" class="btn-green service-cta">Let's make this happen</a>
        </div>
      </div>
    </section>

    <!-- ─── UPCOMING WORKSHOPS ────────────────────────── -->
    <section class="upcoming-section" id="upcoming">
      <div class="upcoming-inner">
        <p class="section-label">SAVE THE DATE</p>
        <h2 class="section-title">Upcoming workshops</h2>
        <div class="workshops-grid">
          <div v-for="w in upcomingWorkshops" :key="w.title + w.location" class="workshop-card">
            <img src="/img/Rectangle 58.png" alt="" class="workshop-bg" />
            <div class="workshop-content">
              <span class="workshop-tag">{{ w.tag }}</span>
              <h3 class="workshop-title">{{ w.title }}</h3>
              <div class="workshop-details">
                <span>📅 {{ w.date }}</span>
                <span>📍 {{ w.location }}</span>
                <span>{{ w.description }}</span>
              </div>
              <a href="#newsletter" class="btn-outline">Get notified</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── WORKSHOP INTRO ───────────────────────────── -->
    <section class="wi-section">
      <div class="wi-inner">
        <div class="wi-text">
          <h2 class="wi-title">Collage workshops where we come together to craft, connect, and express ourselves.</h2>
        </div>
        <div class="wi-photos">
          <img src="/img/tijeraroja.png"  alt="" class="wi-deco wi-deco--scissors" />
          <img src="/img/smileyface.png"  alt="" class="wi-deco wi-deco--smiley" />
          <img src="/img/starpink.png"    alt="" class="wi-deco wi-deco--star" />
          <img src="/img/washitape.png"   alt="" class="wi-deco wi-deco--tape" />
          <img src="/img/herostar.png"    alt="" class="wi-deco wi-deco--star2" />
          <div class="wi-polaroid wi-polaroid--top">
            <img src="/img/collagepolaroid2.png" alt="Workshop" />
          </div>
          <div class="wi-polaroid wi-polaroid--bottom">
            <img src="/img/collagepolaroid.png" alt="Workshop participants" />
          </div>
        </div>
        <div class="wi-cta-wrap">
  <a href="#upcoming" class="btn-green">See upcoming workshops</a>
</div>
      </div>
    </section>

    <!-- ─── MEMORIES CAROUSEL ────────────────────────────── -->
    <section class="memories-section">
      <h2 class="memories-title">Memories of past workshops...</h2>
      <div class="memories-track-wrap">
        <div class="memories-track" :style="{ transform: `translateX(-${memoryOffset}px)` }">
          <div
            v-for="(item, i) in [...pastWorkshops, ...pastWorkshops]"
            :key="i"
            class="memory-slide"
            :class="`memory-slide--${i % 4}`"
            @click="openMemory(item)"
          >
            <img :src="item.img" :alt="item.title" class="memory-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- ─── TESTIMONIOS ───────────────────────────────────── -->
    <section class="testimonials-section">
      <img src="/img/tijeraroja.png" alt="" class="test-scissors" />
      <img src="/img/smileyface.png" alt="" class="test-smiley" />
      <h2 class="test-title">What participants say</h2>
      <div class="test-carousel">
        <button class="test-btn" @click="prevTestimonial">‹</button>
        <div class="test-content">
          <p class="test-quote">"{{ testimonials[currentTestimonial].quote }}"</p>
          <span class="test-author">{{ testimonials[currentTestimonial].author }}</span>
        </div>
        <button class="test-btn" @click="nextTestimonial">›</button>
      </div>
    </section>

    <!-- ─── MEMORY POPUP ──────────────────────────────────── -->
    <div v-if="memoryPopup" class="popup-overlay" @click.self="closeMemory">
      <div class="popup">
        <button class="popup-close" @click="closeMemory">✕</button>
        <img :src="memoryPopup.img" :alt="memoryPopup.title" class="popup-img" />
        <p class="popup-caption">{{ memoryPopup.title }} · {{ memoryPopup.location }}</p>
      </div>
    </div>

    <!-- ─── NEWSLETTER ────────────────────────────────── -->
    <section class="newsletter-section" id="newsletter">
      <img src="/img/tijeraroja.png" alt="" class="nl-scissors" />
      <img src="/img/clips.png" alt="" class="nl-clips" />
      <div class="newsletter-content">
        <h2 class="newsletter-title">Stay in the loop</h2>
        <p class="newsletter-sub">Join the list for workshop invitations, creative resources and collage inspiration straight to your inbox.</p>
        <div v-if="!subscribed" class="newsletter-form">
          <input v-model="emailInput" type="email" placeholder="your@email.com" class="nl-input" />
          <button @click="handleNewsletter" class="btn-pink">Count me in!</button>
        </div>
        <div v-else class="newsletter-thanks">
          <p>🎉 You're in! Talk soon.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ─── BASE ───────────────────────────────────────────────── */
.collage-page {
  font-family: 'BethanyElingston', sans-serif;
  background: white;
  color: black;
  overflow-x: clip;
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
  right: 600px;
}
.hero-arrow {
  width: 70px;
  height: auto;
  margin-bottom: 16px;
  opacity: 100%;
}

/* ─── VALEN BIO ──────────────────────────────────────────── */
.vb-section {
  position: relative;
  padding: 0;
  overflow: visible;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: white;
}
.vb-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.vb-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 5%;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}
.vb-left {
  position: relative;
  height: 500px;
}
.vb-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
.vb-note-bg {
  height: 150%;
  width: auto;
  max-width: none;
  display: block;
  transform: rotate(-100deg);
}
.vb-polaroid {
  position: absolute;
  top: 65px;
  left: 30px;
  width: 280px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  transform: rotate(-2deg);
  z-index: 3;
}
.vb-polaroid-img {
  width: 100%;
  display: block;
}
.vb-tape {
  position: absolute;
  width: 180px;
  top: -20px;
  left: 120px;
  transform: rotate(20deg);
  z-index: 4;
}
.vb-note-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-44%, -48%);
  width: 105%;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.vb-note-text p {
  font-size: 30px;
  color: black;
  text-align: justify !important;
  margin: 2px;
}
.vb-star {
  position: absolute;
  width: 80px;
  bottom: 360px;
  left: 190px;
  z-index: 2;
}

/* ─── SERVICES ───────────────────────────────────────────── */
.services-section {
  background: white;
}
.svc-label {
  font-family: 'myfont', sans-serif !important;
  font-size: 45px;
  text-align: center;
  color: black;
  margin: 0 0 -20px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.svc-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.02em;
  color: black;
  margin: 0 0 48px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 340px));
  justify-content: center;
  gap: 80px;
  max-width: 1500px;
  margin: 0 auto;
}
.service-card {
  background: white;
  border-radius: 20px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.service-card:hover { transform: translateY(-4px); }
.service-title {
  margin: 20px 24px 0;
  font-size: 30px;
  text-align: center;
}
.service-desc {
  margin: 8px 20px 20px;
  text-align: center;
}

.service-cta {  
    margin: 0 auto 20px;
  align-self: center;
  text-align: center;
}
.service-img-wrap {
  position: relative;
  width: calc(100% - 32px);
  margin: 16px 16px 0;
  aspect-ratio: 4/5;
  border-radius: 12px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.service-img--hover {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.service-card:hover .service-img--hover {
  opacity: 1;
}

/* ─── UPCOMING ───────────────────────────────────────────── */
.upcoming-section {
  padding: 50px 5%;
}
.upcoming-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.section-label {
  font-family: 'myfont', sans-serif !important;
  font-size: 55px;
  color: black;
  text-transform: uppercase;
}
.section-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: black;
  margin: 0;
}
.workshops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 40px 0 24px;
}
.workshop-card {
  position: relative;
  text-align: left;
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
.workshop-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
}
.workshop-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'DM Sans', sans-serif !important;
  font-size: 15px;
  color: black;
}
.workshop-details span {
  font-family: 'DM Sans', sans-serif !important;
}
.workshop-content {
  position: relative;
  font-family: 'DM Sans', sans-serif !important;
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

/* ─── WORKSHOP INTRO ─────────────────────────────────────── */
.wi-section {
  padding: 25px 5% 80px;
  background: white;
  overflow: hidden;
}
.wi-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.wi-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 4.5vw, 58px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #111;
  margin: 0 0 40px 0;
}
.wi-photos {
  position: relative;
  height: 440px;
}
.wi-polaroid {
  position: absolute;
  border-radius: 4px;
}
.wi-polaroid img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.wi-polaroid--top {
  width: 350px;
  height: 220px;
  top: -100px;
  right: 20px;
  transform: rotate(4deg);
  z-index: 2;
}
.wi-polaroid--bottom {
  width: 280px;
  height: 200px;
  bottom: 100px;
  right: 180px;
  transform: rotate(-5deg);
  z-index: 3;
}
.wi-deco {
  position: absolute;
  pointer-events: none;
}
.wi-deco--scissors {
  width: 90px;
  top: 30px;
  left: 30px;
  transform: rotate(20deg);
  z-index: 4;
}
.wi-deco--smiley {
  width: 55px;
  top: 180px;
  right: -20px;
  z-index: 4;
}
.wi-deco--star {
  width: 100px;
  bottom: -55px;
  right: 30px;
  z-index: 1;
  animation: spin-slow 8s linear infinite;
}
.wi-deco--tape {
  width: 150px;
  bottom: 140px;
  left: 10px;
  transform: rotate(-15deg);
  z-index: 10;
}
.wi-deco--star2 {
  width: 98px;
  top: 260px;
  left: 30px;
  z-index: 4;
  animation: spin-slow 8s linear infinite reverse;
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.btn-green {
  display: inline-block;
  padding: 13px 28px;
  background: #D9FB60;
  color: black;
  border: none;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s;
}
.btn-green:hover { transform: scale(1.04); }

.wi-cta-wrap {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 32px;
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
  text-decoration: none;
  transition: transform 0.2s;
}
.btn-pink:hover { transform: scale(1.04); }
.btn-outline {
  display: inline-block;
  padding: 11px 22px;
  background: transparent;
  color: black;
  border: 2px solid #111;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
  width: fit-content;
}
.btn-outline:hover { background: #D9FB60; border-color: #D9FB60; }

/* ─── TESTIMONIALS ───────────────────────────────────────── */
.testimonials-section {
  padding: 80px 5%;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.test-scissors {
  position: absolute;
  width: 70px;
  top: 100px;
  left: 25%;
  transform: rotate(60deg);
}
.test-smiley {
  position: absolute;
  width: 48px;
  bottom: 90px;
  right: 35%;
}
.test-title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: black;
  margin-bottom: 10px;
}
.test-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 700px;
  margin: 0 auto;
}
.test-btn {
  background: none;
  border: none;
  font-size: 48px;
  color: black;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
  flex-shrink: 0;
}
.test-btn:hover { color: #FF7BB5; }
.test-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  min-height: 160px;
  justify-content: center;
}
.test-quote {
  font-family: 'DM Sans', sans-serif;
  font-size: 25px;
  line-height: 1.5;
  color: black;
  margin: 0;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.test-author {
  font-family: 'MyFont', sans-serif !important;
  text-transform: uppercase;
  font-size: 50px;
  color: black;
  margin: 0;
}

/* ─── MEMORIES ───────────────────────────────────────────── */
.memories-section {
  padding: 10px 0 10px;
  overflow: hidden;
  margin-top: 60px;
  background: white;
}
.memories-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 60px 0;
  padding: 0 5%;
  text-align: center;
}
.memories-track-wrap {
  overflow: hidden;
  width: 100%;
  padding: 40px 0 60px;
}
.memories-track {
  display: flex;
  gap: 0;
  align-items: center;
  transition: none;
  will-change: transform;
}
.memory-slide {
  flex-shrink: 0;
  width: 260px;
  cursor: pointer;
  margin-right: -20px;
  position: relative;
}
.memory-slide--0 { transform: rotate(-6deg) translateY(10px); z-index: 1; }
.memory-slide--1 { transform: rotate(4deg) translateY(-15px); z-index: 2; }
.memory-slide--2 { transform: rotate(-3deg) translateY(5px); z-index: 1; }
.memory-slide--3 { transform: rotate(7deg) translateY(-10px); z-index: 2; }
.memory-slide:hover {
  z-index: 10;
  transform: rotate(0deg) translateY(-20px) scale(1.05) !important;
  transition: transform 0.3s ease;
}
.memory-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

/* ─── POPUP ──────────────────────────────────────────────── */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.popup {
  background: #fff;
  border-radius: 20px;
  padding: 16px;
  max-width: 600px;
  width: 100%;
  position: relative;
}
.popup-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
  z-index: 1;
}
.popup-img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  display: block;
}
.popup-caption {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 22px;
  color: #111;
  text-align: center;
  margin: 16px 0 8px;
}

/* ─── NEWSLETTER ─────────────────────────────────────────── */
.newsletter-section {
  background: #FFC7EA;
  padding: 80px 5%;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.nl-scissors {
  position: absolute;
  width: 75px;
  top: 80px;
  left: 28%;
  transform: rotate(200deg);
}
.nl-clips {
  position: absolute;
  width: 60px;
  bottom: 100px;
  right: 415px;
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
  color: black;
  margin: 0 0 16px 0;
}
.newsletter-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: black;
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
  border: 2px solid black;
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

/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  /* HERO */
 .hero {
  padding: 10px 5% 0;
}

  .hero-eyebrow {
    font-size: 22px;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  .hero-title-wrap {
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: 44px;
  }

  .deco-washitape {
    width: 60px;
    top: -40px;
    left: -10px;
    transform: rotate(1deg); 
  }

  .deco-star-tl {
    width: 45px;
    top: -30px;
    right: 5px;
  }

  .deco-smiley {
    width: 28px;
    top: 65px;
    right: 35px;
  }

  .deco-note {
  display: none;
  }

  .deco-star-br {
    width: 50px;
    bottom: 40px;
    left:25px;
  }

  /* VALEN BIO */

  .vb-section {
  min-height: auto;
}
  .vb-inner {
    grid-template-columns: 110px 1fr;
    gap: 20px;
    align-items: center;
    padding: 60px 5%;
  }

  .vb-left {
    position: relative;
    height: 130px;
  }

  .vb-polaroid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-2deg);
    width: 110px;
  }

  .vb-tape {
    width: 55px;
    top: -22px;
    left: 30px;
  }

  .vb-right {
    height: 130px;
    display: flex;
    align-items: center;
  }

  .vb-note-text {
    position: static;
    transform: none;
    width: 100%;
    text-align: left;
    align-items: flex-start;
    gap: 3px;
  }

  .vb-note-text p {
    font-size: 12px;
    text-align: left;
    line-height: 1.2;
  }

  .vb-star {
    display: none;
  }

  /* SERVICES */
  .services-section {
    padding: 10px 5% 50px;
  }

  .svc-label { font-size: 24px; margin-bottom: 0px; }
  .svc-title { font-size: 32px; margin-bottom: 20px; }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .service-title { font-size: 18px; margin: 10px 14px 0; }
  .service-desc { font-size: 12px; margin: 6px 14px 14px; }
  .service-img-wrap { width: calc(100% - 24px); margin: 12px 12px 0; }
  .service-cta { font-size: 12px; padding: 8px 16px; margin: 0 auto 14px; }

  /* WORKSHOP INTRO */
  .wi-section { padding: 20px 5% 20px; }
  .wi-inner { grid-template-columns: 1fr; }
  .wi-title { text-align: center; }
  .wi-text { display: flex; flex-direction: column; align-items: center; text-align: center; }

  .wi-photos {
    height: 300px;
    margin-top: -100px;
    position: relative;
  }

  .wi-polaroid--top {
    width: 190px;
    height: 175px;
    top: 0;
    right: -5px;
  }

  .wi-polaroid--bottom {
    width: 175px;
    height: 160px;
    bottom: 85px;
    right: 120px;
  }

  .wi-deco { display: none; }

  .wi-cta-wrap {
    margin-top: -30px;
  }

  /* UPCOMING */
  .section-label { font-size: 32px; }
  .workshops-grid { grid-template-columns: 1fr; }
  .workshop-content { padding: 28px 28px; }
  .workshop-title { font-size: 26px; }

  /* TESTIMONIALS */
  .testimonials-section {
  padding: 30px 5%;
}
  .test-scissors, .test-smiley { display: none; }
  .test-title { font-size: 32px; }
  .test-carousel { gap: 12px; }
  .test-btn { font-size: 32px; }
  .test-quote { font-size: 18px; }
  .test-author { font-size: 32px; }

  /* MEMORIES */
  .memory-section { padding: -30px 5% -30px; margin-top: 0;}
  .memories-track-wrap { padding: 10px 0 50px; }
  .memory-slide { width: 190px; margin-bottom: -20px; }
  .memories-title {
  margin-bottom: 40px; margin-top:-20px;
}

  /* NEWSLETTER */
  .nl-scissors, .nl-clips { display: none; }
  .newsletter-section { padding: 30px 5% 30px; }
  .newsletter-title { font-size: 34px; }
  .newsletter-sub { font-size: 15px; text-align: center; }
}
</style>