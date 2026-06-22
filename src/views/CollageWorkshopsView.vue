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

// ─── RESOURCES MODAL ──────────────────────────────────────
const modalOpen = ref(false);
const modalEmail = ref('');
const modalSubmitted = ref(false);
const currentResource = ref('');

const openModal = (resource) => {
  currentResource.value = resource;
  modalOpen.value = true;
  modalSubmitted.value = false;
  modalEmail.value = '';
};

const closeModal = () => {
  modalOpen.value = false;
};

const submitModal = () => {
  if (modalEmail.value) modalSubmitted.value = true;
};

// ─── CAROUSEL ─────────────────────────────────────────────
const currentSlide = ref(0);
let autoplayInterval = null;

const pastWorkshops = [
  { img: '/img/collage (4).JPG',   title: 'Collage & Tarot',         location: 'Aarhus' },
  { img: '/img/collage (2).JPG',   title: 'Collage Afternoon',   location: 'DOKK1, Aarhus' },
  { img: '/img/collage (5).jpg',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/collagesome.jpg',   title: 'Collage and Migrant Emotions',        location: 'Aarhus' },
  { img: '/img/collage (1).jpg',   title: 'Painting Session',        location: 'Aarhus' },
  { img: '/img/collage (8).jpg',   title: 'Pop-up cards Workshop',   location: 'Aarhus' },
  { img: '/img/collage (12).JPEG',   title: 'Monochromatic Collage Workshop',         location: 'Royal Danish Library' },
  { img: '/img/proyecto8.jpg',     title: 'Collage Afternoon',   location: 'DOKK1, Aarhus' },
  { img: '/img/collage-final-works.JPG', title: 'Collage Afternoon', location: 'DOKK1, Aarhus' },
  { img: '/img/collage (7).JPG',   title: 'Collage Afternoon',       location: 'DOKK1, Aarhus' },
  { img: '/img/CollageworkshopAarhusCityWelcome.JPG', title: 'Aarhus City Welcome Workshop' },
  { img: '/img/collage (11).JPEG', title: 'Syddansk Erhvervsakademi, Esbjerg' },
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
  
  memoryInterval = setInterval(() => {
    memoryOffset.value += 0.5;
    if (memoryOffset.value >= (pastWorkshops.length * 296)) {
      memoryOffset.value = 0;
    }
  }, 16);
});
onUnmounted(() => {
  clearInterval(autoplayInterval);
  clearInterval(memoryInterval);
});
// ─── INSTAGRAM ────────────────────────────────────────────
const instaPosts = [
  { id: '18120735115738180', permalink: 'https://www.instagram.com/reel/DZfyCL7IWIL/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyMDczNTExNTczODE4MCIsImgiOiJyaXp1MGUifQ.jpg?class=originalMedium', caption: 'Otro paseo de colores', isReel: true },
  { id: '18009919643886145', permalink: 'https://www.instagram.com/reel/DZUf7BwoL5X/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODAwOTkxOTY0Mzg4NjE0NSIsImgiOiIxc2ZxbTlsIn0.jpg?class=originalMedium', caption: 'Un plan creativo y diferente para hacer con amigos', isReel: true },
  { id: '17899277172456252', permalink: 'https://www.instagram.com/reel/DZNs4Sao1sn/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzg5OTI3NzE3MjQ1NjI1MiIsImgiOiI3c2dpcjUifQ.jpg?class=originalMedium', caption: '100% real, que placer', isReel: true },
  { id: '18441120433139205', permalink: 'https://www.instagram.com/reel/DZFVz5ZodmW/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODQ0MTEyMDQzMzEzOTIwNSIsImgiOiIxcG1qa3QzIn0.jpg?class=originalMedium', caption: 'La cajita de fosforos', isReel: true },
  { id: '18112897240858437', permalink: 'https://www.instagram.com/reel/DY42byZIXj9/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODExMjg5NzI0MDg1ODQzNyIsImgiOiIxdTV0N3lqIn0.jpg?class=originalMedium', caption: 'Recordatorio: si te hace feliz, eso es todo lo que importa', isReel: true },
];

// ─── NEWSLETTER ───────────────────────────────────────────
const emailInput = ref('');
const subscribed = ref(false);
const handleNewsletter = () => {
  if (emailInput.value) subscribed.value = true;
};

// ─── WORKSHOP BREAKDOWN ───────────────────────────────────
const workshopSteps = [
  { number: '01', title: 'Gather & inspire', desc: "We start by looking through magazines, books and printed images. No pressure, just exploring colours, shapes and things that catch your eye." },
  { number: '02', title: 'Cut & collect', desc: "You cut out everything that resonates. Scissors, hands, intuition. There are no rules about what is good enough to keep." },
  { number: '03', title: 'Compose & paste', desc: "You arrange your pieces on paper and start gluing. The composition evolves naturally and that is the magic of it." },
  { number: '04', title: 'Share & connect', desc: "We close by sharing our work with the group. Every collage tells a different story and that is what makes it beautiful." },
];

const upcomingWorkshops = [
  { title: 'Collage Workshop', date: 'September 2026', location: 'Aarhus, Denmark', description: 'Free, but you need to sign up', tag: 'Coming soon' },
  { title: 'Collage Workshop', date: 'September 2026', location: 'Esbjerg, Denmark', description: 'Free, but you need to sign up', tag: 'Coming soon' },
];
</script>

<template>
  <div class="workshops-page">

    <!-- ─── BACK LINK ──────────────────────────────────── -->
    <div class="back-wrap">
      <a href="/collage" class="back-link">← Back to Collage</a>
    </div>


        <!-- ─── WORKSHOP INTRO ───────────────────────────── -->
    <section class="wi-section">
      <div class="wi-inner">

        <!-- Left: text + CTA -->
        <div class="wi-text">
          <h2 class="wi-title">Collage workshops where we come together to craft, connect, and express ourselves.</h2>
          <a href="#upcoming" class="btn-green">See upcoming workshops</a>
        </div>

        <!-- Right: stacked polaroid photos + decorations -->
        <div class="wi-photos">
          <!-- Decorations -->
          <img src="/img/tijeraroja.png"  alt="" class="wi-deco wi-deco--scissors" />
          <img src="/img/smileyface.png"  alt="" class="wi-deco wi-deco--smiley" />
          <img src="/img/starpink.png"    alt="" class="wi-deco wi-deco--star" />
          <img src="/img/washitape.png"   alt="" class="wi-deco wi-deco--tape" />
          <img src="/img/herostar.png"    alt="" class="wi-deco wi-deco--star2" />

          <!-- Polaroid photos -->
          <div class="wi-polaroid wi-polaroid--top">
            <img src="/img/collagepolaroid2.png" alt="Workshop" />
          </div>
          <div class="wi-polaroid wi-polaroid--bottom">
            <img src="/img/collagepolaroid.png" alt="Workshop participants" />
          </div>
        </div>

      </div>
    </section>

    <!-- ─── VALEN BIO ────────────────────────────────── -->
<section class="vb-section">
  <img src="/img/pattern.jpg" alt="" class="vb-bg" />
  <div class="vb-inner">
    <!-- Izquierda: cuaderno + polaroid -->
    <div class="vb-left">
      <img src="/img/cuaderno.png" alt="" class="vb-cuaderno" />
      <div class="vb-polaroid">
        <img src="/img/valpolaroid.png" alt="Valen" class="vb-polaroid-img" />
      </div>
      <img src="/img/washitape.png" alt="" class="vb-tape" />
    </div>
    <!-- Derecha: nota con texto -->
    <div class="vb-right">
      <img src="/img/heronote.png" alt="" class="vb-note-bg" />
      <div class="vb-note-text">
        <p>HI! I'M VALEN</p>
        <p>EVER SINCE I CAN REMEMBER, I'VE HAD SOME KIND OF SCISSORS IN MY HAND.</p>
        <p>MY WORKSHOPS ARE ALL ABOUT PLAYFUL CREATIVITY AND MEETING LIKEMINDED SOULS.</p>
        <p>COME MAKE SOMETHING BEAUTIFUL WITH ME!</p>
      </div>
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

    <!-- ─── FREE RESOURCES ────────────────────────────────── -->
<section class="resources-section">
  <h2 class="resources-title">Free resources</h2>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-img-wrap">
        <img src="/img/collage (4).JPG" alt="Template Valentine's card" class="resource-img" />
      </div>
      <div class="resource-info">
        <p class="resource-name">Template Valentine's card</p>
        <button class="btn-download" @click="openModal('valentine')">Download</button>
      </div>
    </div>
    <div class="resource-card">
      <div class="resource-img-wrap">
        <img src="/img/collageart2.png" alt="Colorful patterns journaling" class="resource-img" />
      </div>
      <div class="resource-info">
        <p class="resource-name">Colorful patterns journaling</p>
        <button class="btn-download" @click="openModal('patterns')">Download</button>
      </div>
    </div>
  </div>
</section>

<!-- ─── DOWNLOAD MODAL ───────────────────────────────── -->
<div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
  <div class="modal">
    <button class="modal-close" @click="closeModal">✕</button>
    <h3 class="modal-title">Get your free resource!</h3>
    <p class="modal-sub">Enter your email and I will send it straight to your inbox.</p>
    <div v-if="!modalSubmitted" class="modal-form">
      <input v-model="modalEmail" type="email" placeholder="your@email.com" class="nl-input" />
      <button class="btn-pink" @click="submitModal">Send it!</button>
    </div>
    <div v-else class="modal-thanks">
      <p>🎉 Thanks! The resource will be available soon.</p>
    </div>
  </div>
</div>

    <!-- ─── INSTAGRAM ─────────────────────────────────── -->
    <section class="insta-section">
      <span class="insta-hi-label">Follow my creative journey!</span>
      <h2 class="insta-title">Lately on Instagram</h2>
      <div class="insta-grid">
        <a
          v-for="post in instaPosts"
          :key="post.id"
          :href="post.permalink"
          target="_blank"
          rel="noopener"
          class="insta-item"
        >
          <img :src="post.thumbnail" :alt="post.caption" class="insta-img" />
          <div class="insta-overlay">
            <span v-if="post.isReel" class="insta-reel-badge">▶ Reel</span>
            <p class="insta-caption">{{ post.caption }}</p>
          </div>
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ─── BASE ───────────────────────────────────────────────── */
.workshops-page {
  font-family: 'BethanyElingston', sans-serif;
  background: white;
  color: black;
  overflow-x: hidden;
}

/* ─── BACK LINK ──────────────────────────────────────────── */
.back-wrap {
  padding: 24px 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 18 px;
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover { color: #FF7BB5; }

/* ─── HERO ───────────────────────────────────────────────── */
.hero {
  padding: 60px 5% 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-eyebrow {
  font-family: 'myfont', sans-serif;
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
  right: 580px;
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
/* ─── SECTION SHARED ─────────────────────────────────────── */
.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #999;
  margin: 0 0 12px 0;
}

.section-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 16px 0;
}

/* ─── ABOUT ──────────────────────────────────────────────── */
.about-section {
  background: #FFC7EA;
  padding: 80px 5%;
}

.about-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 80px;
  align-items: center;
}

.about-photo {
  width: 260px;
  height: auto;
  transform: rotate(-3deg);
  display: block;
}

.about-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: #333;
  margin: 0 0 16px 0;
}

.about-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.pill {
  background: #fff;
  color: #111;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 50px;
}

/* ─── UPCOMING ───────────────────────────────────────────── */
.upcoming-section {
  padding: 80px 5%;
}

.upcoming-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.workshops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 40px 0 24px;
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
  font-family: 'DM Sans', sans-serif !important ;
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

.inline-link {
  color: #FF7BB5;
  text-decoration: none;
}
.inline-link:hover { text-decoration: underline; }


/* ─── CAROUSEL ───────────────────────────────────────────── */
.carousel-section {
  padding: 80px 0;
  background: #FFC7EA;
}

.carousel-inner {
  padding: 0 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-outer {
  overflow: hidden;
  margin-top: 40px;
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

.carousel-caption {
  padding: 12px 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carousel-title-text {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 18px;
  color: #111;
}

.carousel-location {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: #555;
}

.carousel-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 32px;
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
  transition: background 0.2s;
}

.carousel-btn:hover {
  background: #D9FB60;
  border-color: #D9FB60;
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

/* ─── INSTAGRAM ──────────────────────────────────────────── */
.insta-section {
  padding: 80px 5% 60px;
  text-align: center;
}

.insta-hi-label {
  font-family: 'MyFont', sans-serif;
  font-size: 55px;
  color: #111;
  display: block;
  transform: rotate(-3deg);
  margin-bottom: -10px;
  margin-left: -200px;
  text-transform: uppercase;
}

.insta-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 40px 0;
}

.insta-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
}

.insta-item {
  position: relative;
  aspect-ratio: 9/16;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  display: block;
}

.insta-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.insta-item:hover .insta-img { transform: scale(1.06); }

.insta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 12px;
}

.insta-item:hover .insta-overlay { opacity: 1; }

.insta-reel-badge {
  background: #FF7BB5;
  color: #fff;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
}

.insta-caption {
  color: #fff;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

/* Photos container */
.wi-photos {
  position: relative;
  height: 440px;
}

/* Polaroid style */
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

/* Decorative elements */
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
  bottom:-55px;
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

/* ─── VALEN BIO ──────────────────────────────────────────── */
.vb-section {
  position: relative;
  padding: 0;
  overflow: visible;
  min-height: 500px;
  display: flex;
  align-items: center;
}


.vb-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%; /* ← antes 70% */
  object-fit: cover;
  z-index: 0;
}

.vb-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 5%; /* ← agregá padding */
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
}


.vb-left {
  position: relative;
  height: 500px; /* ← igual que min-height */
}

.vb-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px; /* ← igual que min-height */
}

.vb-note-bg {
  height: 85%;
  width: auto;
  max-width: none;
  display: block;
}
.vb-cuaderno {
  position: absolute;
  width: 400px;
  bottom: 0;
  left: -350px;
  z-index: 1;
}

.vb-polaroid {
  position: absolute;
  top: -55px;
  left: -160px;
  width: 250px;
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
  top: -140px;
  left: -120px;
  transform: rotate(20deg);
  z-index: 4;
}

.vb-note-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-44%, -48%);
  width: 105%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vb-note-text p {
  font-family: 'MyFont', sans-serif;
  font-size: 40px;
  color: black;
  line-height: 0.9;
  text-transform:  justify;
  margin: 0;
}

.vb-star {
  position: absolute;
  width: 100px;
  bottom: -20px;
  left: 20px;
  z-index: 2;
}

@media (max-width: 900px) {
  .vb-inner { grid-template-columns: 1fr; }
  .vb-left { height: 300px; }
  .vb-cuaderno { width: 220px; }
  .vb-polaroid { width: 130px; left: 60px; }
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

/* ─── FREE RESOURCES ─────────────────────────────────────── */
.resources-section {
  padding: 80px 5%;
  text-align: center;
}

.resources-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 48px 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.resource-card {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
}

.resource-img-wrap {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.resource-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.resource-card:hover .resource-img {
  transform: scale(1.04);
}

.resource-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.resource-name {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 22px;
  color: #111;
  margin: 0;
}

.btn-download {
  display: inline-block;
  padding: 10px 28px;
  background: #D9FB60;
  color: #111;
  border: none;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-download:hover { transform: scale(1.04); }

/* ─── MODAL ──────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: #fff;
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 480px;
  width: 100%;
  position: relative;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;
}

.modal-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #111;
  margin: 0 0 12px 0;
}

.modal-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #666;
  margin: 0 0 28px 0;
  line-height: 1.6;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.modal-thanks p {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  color: black;
}
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
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 48px 0;
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
}

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
  font-family: 'MyFont', sans-serif;
  text-transform: uppercase;
  font-size: 50px;
  color: black;
  margin: 0;
}

/* ─── MEMORIES ───────────────────────────────────────────── */
.memories-section {
  padding: 60px 0 100px;
  overflow: hidden;
  background: #fff;
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

/* Rotaciones alternadas como en la referencia */
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
/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-imgs { height: 300px; }
  .about-inner { grid-template-columns: 1fr; gap: 40px; }
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .workshops-grid { grid-template-columns: 1fr; }
  .reviews-grid { grid-template-columns: 1fr; }
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
  .carousel-slide { min-width: calc(50% - 8px); }
  .insta-hi-label { margin-left: 0; font-size: 36px; }
  .wi-inner { grid-template-columns: 1fr; }
  .wi-photos { height: 340px; margin-top: 40px; }
  .wi-polaroid--top { width: 190px; height: 175px; right: 10px; }
  .wi-polaroid--bottom { width: 175px; height: 160px; right: 140px; }
  .vb-inner { grid-template-columns: 1fr; gap: 60px; }
  .vb-polaroid { width: 220px; }
}

@media (max-width: 500px) {
  .steps-grid { grid-template-columns: 1fr; }
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
  .carousel-slide { min-width: 80%; }
  .newsletter-form { flex-direction: column; align-items: center; }
  .nl-input { width: 100%; }
}
</style>