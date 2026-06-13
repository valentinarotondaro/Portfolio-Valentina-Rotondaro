<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);
let autoplayInterval = null;

const nextSlide = () => {
  if (currentSlide.value < pastWorkshops.length - 3) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = pastWorkshops.length - 3;
  }
};

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 3500);
});

onUnmounted(() => {
  clearInterval(autoplayInterval);
});

const instaPosts = [
  {
    id: '18120735115738180',
    permalink: 'https://www.instagram.com/reel/DZfyCL7IWIL/',
    thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyMDczNTExNTczODE4MCIsImgiOiJyaXp1MGUifQ.jpg?class=originalMedium',
    caption: 'Otro paseo de colores',
    isReel: true,
  },
  {
    id: '18009919643886145',
    permalink: 'https://www.instagram.com/reel/DZUf7BwoL5X/',
    thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODAwOTkxOTY0Mzg4NjE0NSIsImgiOiIxc2ZxbTlsIn0.jpg?class=originalMedium',
    caption: 'Un plan creativo y diferente para hacer con amigos',
    isReel: true,
  },
  {
    id: '17899277172456252',
    permalink: 'https://www.instagram.com/reel/DZNs4Sao1sn/',
    thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzg5OTI3NzE3MjQ1NjI1MiIsImgiOiI3c2dpcjUifQ.jpg?class=originalMedium',
    caption: '100% real, que placer',
    isReel: true,
  },
  {
    id: '18441120433139205',
    permalink: 'https://www.instagram.com/reel/DZFVz5ZodmW/',
    thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODQ0MTEyMDQzMzEzOTIwNSIsImgiOiIxcG1qa3QzIn0.jpg?class=originalMedium',
    caption: 'La cajita de fósforos',
    isReel: true,
  },
  {
    id: '18112897240858437',
    permalink: 'https://www.instagram.com/reel/DY42byZIXj9/',
    thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODExMjg5NzI0MDg1ODQzNyIsImgiOiIxdTV0N3lqIn0.jpg?class=originalMedium',
    caption: 'Recordatorio: si te hace feliz, eso es todo lo que importa',
    isReel: true,
  }
];

const emailInput = ref('');
const subscribed = ref(false);

const handleNewsletter = () => {
  if (emailInput.value) {
    subscribed.value = true;
  }
};

const upcomingWorkshops = [
  {
    title: 'Collage Workshop',
    date: 'September 2026',
    location: 'Aarhus, Denmark',
    description: 'Free, but you need to sign up',
    tag: 'Coming soon',
  },
  {
    title: 'Collage Workshop',
    date: 'September 2026',
    location: 'Esbjerg, Denmark',
    description: 'Free, but you need to sign up',
    tag: 'Coming soon',
  },
];


const pastWorkshops = [
  { img: '/img/collage (4).JPG', title: 'Collage & Tarot', location: 'Aarhus', color: '#FFC7EA' },
  { img: '/img/collage (2).JPG', title: 'Monochromatic Collage', location: 'Royal Danish Library, Aarhus', color: '#D9FB60' },
  { img: '/img/collage (5).jpg', title: 'Collage Afternoon', location: 'DOKK1, Aarhus', color: '#E6ABDD' },
  { img: '/img/collage (11).JPEG', title: 'Collage Workshop', location: 'Esbjerg', color: '#FF7E21' },
  { img: '/img/collage (1).jpg', title: 'Painting Session', location: 'Aarhus', color: '#CAAB2C' },
  { img: '/img/collage (8).jpg', title: 'Pop-up cards Workshop', location: 'Aarhus', color: '#FF7BB5' },
  { img: '/img/collage (9).jpg', title: 'Collage & Tarot', location: 'Aarhus', color: '#FFC7EA' },
  { img: '/img/proyecto8.jpg', title: 'Monochromatic Collage', location: 'Royal Danish Library, Aarhus', color: '#D9FB60' },
  { img: '/img/Collageandmigrantemotions.jpg', title: 'Collage Afternoon', location: 'DOKK1, Aarhus', color: '#E6ABDD' },
  { img: '/img/collage (7).JPG', title: 'Collage Afternoon', location: 'DOKK1, Aarhus', color: '#E6ABDD' },
  { img: '/img/CollageworkshopAarhusCityWelcome.JPG', title: 'Collage Afternoon', location: 'DOKK1, Aarhus', color: '#E6ABDD' },

];


</script>

<template>
  <div class="collage-page">

    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-top-notes">
        <img src="/img/herostar.png" alt="" class="hero-deco--star" />
      </div>

      <h1 class="hero-headline">
        Inspiring you to connect with your creative spark 
      </h1>

      <div class="hero-bottom-notes">
        <div class="hero-deco-wrap">
          <img src="/img/herostar.png" alt="" class="hero-deco--scrap" />
          <span class="deco-text deco-text--scrap"></span>
        </div>
        <div class="hero-deco-wrap">
          <img src="/img/heronote.png" alt="" class="hero-deco--note" />
          <span class="deco-text deco-text--note">CUT. <br> PASTE. <br> CREATE.</span>
        </div>
      </div>

      <img src="/img/flechaabajo.png" alt="scroll down" class="hero-arrow" />
    </section>

    <!-- ─── INTRO / ABOUT ────────────────────────────────── -->
    <section class="intro-section">
      <div class="intro-inner">
        <div class="intro-left">
          <img src="/img/valpolaroid.png" alt="Valen" class="intro-photo" />
          <img src="/img/collage.png" alt="" class="intro-star" />
        </div>
        <div class="intro-right">
          <h2 class="intro-title">Hi, I'm Valen!</h2>
          <p class="intro-desc">
Ever since I can remember, I've had some kind of scissors in my hand. 
<br>
Today, I'm a multimedia designer and collage facilitator based in Aarhus, Denmark. I host workshops where strangers become friends over glue sticks and old magazines, and I truly believe that making something with your hands, however imperfect, is one of the best things you can do for yourself.
          </p>
          
        </div>
      </div>
    </section>

    <!-- ─── UPCOMING WORKSHOPS ───────────────────────────── -->
    <section class="upcoming-section" id="upcoming">
      <div class="upcoming-inner">
        <h2 class="section-title">Upcoming workshops</h2>
        <div class="workshops-grid">
  <div v-for="w in upcomingWorkshops" :key="w.title + w.location" class="workshop-card">
    <img src="/img/Rectangle 58.png" alt="" class="workshop-bg" />
    <div class="workshop-card-content">
      <span class="workshop-tag">{{ w.tag }}</span>
      <h3 class="workshop-title">{{ w.title }}</h3>
      <div class="workshop-details">
        <span class="workshop-detail">📅 {{ w.date }}</span>
        <span class="workshop-detail">📍 {{ w.location }}</span>
        <span class="workshop-detail"> {{ w.description }}</span>
      </div>
      <a href="#newsletter" class="btn-lime-outline">Get notified</a>
    </div>
  </div>
</div>
        <p class="upcoming-note">Want to organise a private workshop for your team or event? <a href="/contact" class="inline-link">Let's talk →</a></p>
      </div>
    </section>

    <!-- ─── REVIEWS ────────────────────────────────── -->
    <section class="reviews-section">
  <h2 class="section-title">What Participants Are Saying</h2>
  <div class="reviews-grid">
    <div class="review-card">
      <div class="review-blob-wrap">
        <img src="/img/shape (1).png" alt="" class="review-blob" />
        <div class="review-blob-content">
          <p class="review-text">"Thank you for this marvelous and creative event that brings people together, nurtures, and inspires!"</p>
          <span class="review-author">Marisol, Argentina</span>
        </div>
      </div>
    </div>
    <div class="review-card">
      <div class="review-blob-wrap">
        <img src="/img/shape (2).png" alt="" class="review-blob" />
        <div class="review-blob-content">
          <p class="review-text">"Lovely experience to meet new faces and make art! Can't wait for the next one!"</p>
          <span class="review-author">Habiba, Egypt</span>
        </div>
      </div>
    </div>
    <div class="review-card">
      <div class="review-blob-wrap">
        <img src="/img/shape (3).png" alt="" class="review-blob" />
        <div class="review-blob-content">
          <p class="review-text">"The atmosphere was perfectly curated for meeting wonderful people and enjoy the creative process!"</p>
          <span class="review-author">Camelia, France</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── PRIVATE WORKSHOPS ────────────────────────────────── -->

<section class="private-section">
  <div class="private-inner">
    <div class="private-text">
      <h2 class="private-title">Want to book a private Collage Workshop?</h2>
      <p class="private-desc">Collage workshops bring people together in the most unexpected ways! No artistic experience needed, just curiosity and good company. <br /> Let's create something memorable together!</p>
      <a href="mailto:vrotondaro@hotmail.com" class="btn-pink">Let's chat</a>
    </div>
    <img src="/img/collage (5).jpg" alt="Private workshop" class="private-img" />
  </div>
</section>

<section class="carousel-section">
  <h2 class="section-title">Beautiful memories of past workshops</h2>
  <div class="carousel-outer">
    <div class="carousel-track" :style="{ transform: `translateX(calc(-${currentSlide * (100 / 3)}% - ${currentSlide * 16}px))` }">
      <div v-for="item in pastWorkshops" :key="item.img" class="carousel-slide">
        <img :src="item.img" :alt="item.title" class="carousel-img" />
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-btn" @click="prevSlide">←</button>
      <button class="carousel-btn" @click="nextSlide">→</button>
    </div>
  </div>
</section>

    

    <!-- ─── RESOURCES ────────────────────────────────────── -->
    <section class="resources-section">
      <div class="resources-inner">
        <h2 class="section-title">Free resources</h2>
       <div class="resources-grid">
  <div class="resource-card">
    <img src="/img/macfigma.png" alt="" class="resource-mac" />
    <h3 class="resource-title">Vision Board Template</h3>
    <a href="#" class="btn-lime-outline">Download PDF</a>
  </div>
  <div class="resource-card">
    <img src="/img/collage.png" alt="" class="resource-mac" />
    <h3 class="resource-title">Beginner's Collage Guide</h3>
    <a href="#" class="btn-lime-outline">Download PDF</a>
  </div>
  <div class="resource-card">
    <img src="/img/telefono.png" alt="" class="resource-mac" />
    <h3 class="resource-title">Color Palette Workbook</h3>
    <a href="#" class="btn-lime-outline">Download PDF</a>
  </div>
</div>
      </div>
    </section>

    <!-- ─── NEWSLETTER ───────────────────────────────────── -->
    <section class="newsletter-section" id="newsletter">
      <div class="newsletter-inner">
        <img src="/img/tijeraroja.png" alt="" class="nl-scissors" />
        <img src="/img/clips.png" alt="" class="nl-star" />
        <div class="newsletter-deco">

        </div>
        <div class="newsletter-content">
          <h2 class="newsletter-title">Stay in the loop</h2>
          <p class="newsletter-sub">Join the list for creative resources, workshop invitations, reflections and collage inspiration — straight to your inbox.</p>
          <div v-if="!subscribed" class="newsletter-form">
            <input
              v-model="emailInput"
              type="email"
              placeholder="your@email.com"
              class="nl-input"
            />
            <button @click="handleNewsletter" class="btn-pink">Count me in!</button>
          </div>
          <div v-else class="newsletter-thanks">
            <p>🎉 You're in! Talk soon.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── INSTAGRAM FEED ───────────────────────────────── -->
    
<section class="insta-section">
  <div class="insta-header">
    <span class="hi-label insta-hi-label">Follow my creative journey!</span>
    <h2 class="section-title">Lately on Instagram</h2>
  </div>
<div class="insta-grid">
  <a
    v-for="post in instaPosts"
    :key="post.id"
    :href="post.permalink"
    target="_blank"
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

.collage-page {
  font-family: 'BethanyElingston', sans-serif;
  background: #fff;
  color: #111;
  overflow-x: hidden;
}

/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  padding: 40px 5% 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.hero-top-notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero-deco--star {
  width: 20px;
  height: auto;
  margin-top: -20px;
  margin-left: -400px;
}

.hero-headline {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 4vw, 76px);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.3;
  color: #111;
  max-width: 900px;
  margin-top: 100px;
}

.hero-bottom-notes {
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: -160px;
}

.hero-deco-wrap {
  position: absolute;
  display: inline-block;
}

.hero-deco-wrap:first-child {
  left: 25%;
  top: -25px;
}

.hero-deco-wrap:last-child {
  right: 28%;
  top: -120px;
}

.hero-deco--scrap {
  width: 180px;
  height: auto;
  margin-bottom: 90px;
  display: block;
  transform: rotate(-5deg);
}

.hero-deco--note {
  width: 250px;
  height: auto;
  display: block;
  transform: rotate(10deg);
}

.deco-text {
  position: absolute;
  font-family: 'MyFont', sans-serif;
  text-transform: uppercase;
  color: black;
  pointer-events: none;
  white-space: nowrap;
}

.deco-text--scrap {
  font-size: 40px;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%) rotate(-5deg);
}

.deco-text--note {
  font-size: 40px;
  top: 53%;
  left: 53%;
  text-align: center;
  line-height: 0.7;
  transform: translate(-50%, -50%) rotate(7deg);
}

.hero-arrow {
  width: 90px;
  height: auto;
}

/* ─── INTRO ─────────────────────────────────────────────── */
.intro-section {
  padding: 80px 5%;
  background: #FFC7EA;
}

.intro-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 80px;
  align-items: center;
}

.intro-left {
  position: relative;
}

.intro-photo {
  width: 280px;
  height: auto;
  display: block;
  transform: rotate(-3deg);
  z-index: 5;
}

.intro-star {
  position: absolute;
  width: 120px;
  bottom: -70px;
  left: -40px;
  z-index: 1;
}

.intro-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.intro-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 52px;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: 0;
  color: #111;
}

.intro-desc {
  font-size: 20px;
  line-height: 1.7;
  color: #333;
  margin: 0;
  max-width: 560px;
  text-align: justify;
}



.value-pill {
  background: #D9FB60;
  color: #111;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 400;
}

/* ─── BUTTONS ───────────────────────────────────────────── */
.btn-pink {
  display: inline-block;
  padding: 14px 32px;
  background: #D9FB60;
  color: black;
  text-decoration: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: 'BethanyElingston', sans-serif;
}

.btn-pink:hover {
  transform: scale(1.04);
  box-shadow: 0 8px 20px rgba(255,123,181,0.4);
}

.btn-lime-outline {
  display: inline-block;
  padding: 12px 10px;
  background: transparent;
  color: black;
  text-decoration: none;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'BethanyElingston', sans-serif;
}

.btn-lime-outline:hover {
  background: #D9FB60;
  border-color: #D9FB60;
}

.inline-link {
  color: #FF7BB5;
  text-decoration: none;
}

.inline-link:hover { text-decoration: underline; }

/* ─── SECTION TITLE ─────────────────────────────────────── */
.section-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0 0 16px 0;
  text-align: center;
}

/* ─── UPCOMING ──────────────────────────────────────────── */
.upcoming-section {
  padding: 80px 5%;
  background: #fff;
}

.upcoming-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.workshops-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 48px 0 32px;
}

.workshop-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
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

.workshop-card-content {
  position: relative;
  z-index: 1;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}


.workshop-tag {
  display: inline-block;
  background: #D9FB60;
  color: black;
  font-size: 12px;
  padding: 4px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
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
  gap: 8px;
}

.workshop-detail {
  font-size: 16px;
  color: black;
}

.upcoming-note {
  font-size: 25px;
  color: black;
  margin-top: 16px;
}


/* ─── REVIEWS ───────────────────────────────────────────── */
.reviews-section {
  padding: 80px 5%;
  background: #fff;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 48px auto 0;
}
.review-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
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
  gap: 16px;
  padding: 24px;
  text-align: center;
  width: 80%;
}

.review-text {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 25px;
  line-height: 1.5;
  color: #111;
  margin: 15px;
}

.review-author {
  font-family: 'MyFont', sans-serif;
  font-size: 38px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: black;
}

/* ─── NEWSLETTER ────────────────────────────────────────── */
.newsletter-section {
  padding: 100px 5%;
  background: #FFC7EA;
  position: relative;
  overflow: hidden;
}

.newsletter-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.newsletter-deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.nl-scissors {
  position: absolute;
  width: 80px;
  top: 10px;
  left: 5%;
  transform: rotate(200deg);
}

.nl-star {
  position: absolute;
  width: 60px;
  bottom: 20px;
  right: -25px;
}

.newsletter-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 400;
  letter-spacing: -0.03em;
  color: black;
  margin: 0 0 16px 0;
}

.newsletter-sub {
  font-size: 18px;
  color: black;
  line-height: 1.6;
  margin: 0 0 36px 0;
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
  font-family: 'BethanyElingston', sans-serif;
  background: #fff;
  outline: none;
  width: 280px;
  transition: border-color 0.2s;
}

.nl-input:focus {
  border-color: #FF7BB5;
}

.newsletter-thanks p {
  font-size: 24px;
  color: #111;
  margin: 0;
}

.private-section {
  padding: 80px 5%;
  background: #fff;
}

.private-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.private-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(28px, 3vw, 48px);
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: 0 0 20px 0;
  color: #111;
}

.private-desc {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin: 0 0 32px 0;
}

.private-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 20px;
}
.carousel-section {
  padding: 60px 0 80px;
  background: #FFC7EA;
}

.carousel-section .section-title {
  padding: 0 5%;
  margin-bottom: 40px;
}
.carousel-outer {
  overflow: hidden;
  padding: 0 5%;
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
  border-radius: 12px;
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
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.carousel-btn:hover {
  background: #111;
  color: #fff;
}

@media (max-width: 900px) {
  .carousel-slide { min-width: calc(50% - 8px); }
}

@media (max-width: 500px) {
  .carousel-slide { min-width: 80%; }
}

/* ─── RESOURCES ─────────────────────────────────────────── */
.resources-section {
  padding: 100px 5%;
  background: #fff;
}

.resources-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1100px;
  margin: 48px auto 0;
}

.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 32px 24px;
  border-radius: 20px;
  transition: box-shadow 0.3s ease;
}

.resource-mac {
  width: 180px;
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

@media (max-width: 900px) {
  .resources-grid { grid-template-columns: 1fr; max-width: 400px; }
}

/* ─── INSTAGRAM ─────────────────────────────────────────── */
.insta-section {
  padding: 80px 5% 20px;
  background: #fff;
}

.insta-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.insta-follow-text {
  font-family: 'MyFont', sans-serif;
  font-size: 35px;
  text-transform: uppercase;
  color: black;
  letter-spacing: 0.04em;
}

.insta-hi-label {
  font-size: 55px;
  margin-bottom: -10px;
  margin-left: -200px;
  transform: rotate(-3deg);
  display: block;
  font-family: myfont, sans-serif;
  text-transform: uppercase;
}
.insta-grid {
  display: grid;
  grid-template-columns: repeat(5,  1fr);
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.insta-item {
  position: relative;
  width: 100%;
 aspect-ratio: 9/16;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
}

.insta-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.insta-item:hover .insta-img {
  transform: scale(1.06);
}

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

.insta-item:hover .insta-overlay {
  opacity: 1;
}

.insta-reel-badge {
  background: #FF7BB5;
  color: #fff;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
}

.insta-caption {
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 900px) {
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 500px) {
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
}
.insta-inner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 100px 5% 40px; }
  .hero-headline { font-size: 28px; }
  .hi-label { font-size: 36px; margin-bottom: -60px; }

  .intro-inner { grid-template-columns: 1fr; gap: 40px; }
  .intro-photo { width: 220px; }
  .intro-title { font-size: 40px; }
  .intro-desc { font-size: 17px; }

  .workshops-grid { grid-template-columns: 1fr; }
  .resources-grid { grid-template-columns: 1fr; }
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
  .insta-header { flex-direction: column; align-items: center; gap: 8px; }
}

@media (max-width: 500px) {
  .hero-headline { font-size: 22px; }
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
  .newsletter-form { flex-direction: column; align-items: center; }
  .nl-input { width: 100%; }
  .intro-title { font-size: 32px; }
}
</style>