<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
  { id: '18120735115738180', permalink: 'https://www.instagram.com/reel/DZfyCL7IWIL/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyMDczNTExNTczODE4MCIsImgiOiJyaXp1MGUifQ.jpg?class=originalMedium', caption: 'Otro paseo de colores', isReel: true },
  { id: '18009919643886145', permalink: 'https://www.instagram.com/reel/DZUf7BwoL5X/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODAwOTkxOTY0Mzg4NjE0NSIsImgiOiIxc2ZxbTlsIn0.jpg?class=originalMedium', caption: 'Un plan creativo y diferente para hacer con amigos', isReel: true },
  { id: '17899277172456252', permalink: 'https://www.instagram.com/reel/DZNs4Sao1sn/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzg5OTI3NzE3MjQ1NjI1MiIsImgiOiI3c2dpcjUifQ.jpg?class=originalMedium', caption: '100% real, que placer', isReel: true },
  { id: '18441120433139205', permalink: 'https://www.instagram.com/reel/DZFVz5ZodmW/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODQ0MTEyMDQzMzEzOTIwNSIsImgiOiIxcG1qa3QzIn0.jpg?class=originalMedium', caption: 'La cajita de fósforos', isReel: true },
  { id: '18112897240858437', permalink: 'https://www.instagram.com/reel/DY42byZIXj9/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODExMjg5NzI0MDg1ODQzNyIsImgiOiIxdTV0N3lqIn0.jpg?class=originalMedium', caption: 'Recordatorio: si te hace feliz, eso es todo lo que importa', isReel: true },
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

    <!-- ─── HERO ──────────────────────────────────────── -->
    <section class="hero">
      <p class="hero-eyebrow">COLLAGE &nbsp; CRAFTS &nbsp; WORKSHOPS &nbsp; BRAND CAMPAIGNS</p>

      <div class="hero-title-wrap">
        <img src="/img/washitape.png"  alt="" class="deco-washitape" />
        <img src="/img/herostar.png"   alt="" class="deco-star-tl" />
        <h1 class="hero-title">Where paper meets<br>possibility</h1>
        <img src="/img/smileyface.png" alt="" class="deco-smiley" />
        <img src="/img/heronote.png"   alt="" class="deco-note" />
        <img src="/img/starpink.png"   alt="" class="deco-star-br" />
      </div>

      <img src="/img/flechaabajo.png" alt="scroll down" class="hero-arrow" />
    </section>

      <!-- ─── 3 SECTION ICONS ──────────────────────── -->
      <div class="hero-nav">
<button class="hero-nav-item" :class="{ active: activeSection === 'art' }" @click="router.push('/collage/art')">          <img src="/img/collage.png" alt="" class="hero-nav-icon" />
          <span>Collage<br>Art</span>
        </button>
        <button class="hero-nav-item" @click="router.push('/collage/workshops')">
  <img src="/img/tijeraroja.png" alt="" class="hero-nav-icon" />
  <span>Creative<br>Workshops</span>
</button>
        <button class="hero-nav-item" :class="{ active: activeSection === 'brands' }" @click="router.push('/collage/brands')">
          <img src="/img/cups.png" alt="" class="hero-nav-icon" />
          <span>Brand<br>Campaigns</span>
        </button>
      </div>
      </div>    
</template>

<style scoped>

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
  width: 110px;
  bottom: -20px;
  right: 600px;
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
  margin-bottom: 130px;
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


/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero-nav { gap: 40px; }
  .artworks-grid { grid-template-columns: 1fr; }
  .products-grid { grid-template-columns: 1fr; }
  .product-item--tall { grid-row: auto; }
  .workhome-cta-wrap { grid-template-columns: 1fr; }
  .workshops-grid { grid-template-columns: 1fr; }
  .reviews-grid { grid-template-columns: 1fr; }
  .resources-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
  .carousel-slide { min-width: calc(50% - 8px); }
  .deco-washitape,
  .deco-star-tl,
  .deco-smiley,
  .deco-note,
  .deco-star-br { display: none; }
}

@media (max-width: 500px) {
  .hero-title { font-size: 36px; }
  .hero-nav { gap: 24px; }
  .hero-nav-icon { width: 56px; height: 56px; }
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
  .carousel-slide { min-width: 80%; }
  .newsletter-form { flex-direction: column; align-items: center; }
  .nl-input { width: 100%; }
}
</style>