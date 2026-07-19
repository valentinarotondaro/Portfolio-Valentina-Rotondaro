<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="brands-page">

    <div class="back-wrap">
  <router-link to="/collage" class="back-link">&lt; Back to Collage</router-link>
</div>

  <section class="hero">
  <img src="/img/shape (1).png" alt="" class="hero-deco hero-deco--lila" />
  <img src="/img/shape (5).png" alt="" class="hero-deco hero-deco--naranja" />
  <img src="/img/shape (2).png" alt="" class="hero-deco hero-deco--azul" />
  <img src="/img/shape (3).png" alt="" class="hero-deco hero-deco--lima" />

  <h1 class="hero-title">Colorful brands<br>deserve <em>colorful art.</em></h1>
  <p class="hero-sub">Paper animations, illustrated collabs and product storytelling through handmade art. Let your brand stand out with something tactile and unexpected.</p>
  <a href="/contact" class="btn-pink">Let's work together</a>
</section>

    <section class="services-section">
      <p class="section-label">WHAT I OFFER</p>
      <h2 class="section-title">Services</h2>
      <div class="services-grid">
  <div class="service-card">
    <img src="/img/paperanimation.png" alt="Paper Animation" class="service-img" />
    <h3 class="service-title">Paper Animation</h3>
    <p class="service-desc">Stop-motion and paper animation campaigns for product launches, social media and brand storytelling.</p>
  </div>
  <div class="service-card">
    <img src="/img/brandillustration.png" alt="Brand Illustration" class="service-img" />
    <h3 class="service-title">Brand Illustration</h3>
    <p class="service-desc">Custom collage illustrations for packaging, editorial, campaigns and brand identity projects.</p>
  </div>
  <div class="service-card">
    <img src="/img/artlicensing.png" alt="Art Licensing" class="service-img" />
    <h3 class="service-title">Art Licensing</h3>
    <p class="service-desc">License my collage art for merchandise, apparel, stationery, puzzles and more.</p>
  </div>
  <div class="service-card">
    <img src="/img/productstorytelling.png" alt="Product Storytelling" class="service-img" />
    <h3 class="service-title">Product Storytelling</h3>
    <p class="service-desc">Creative campaigns that use handmade art to tell your product story in an analog, human way.</p>
  </div>
</div>
    </section>

  <section class="cta-section">
  <img src="/img/shape (1).png" alt="" class="cta-deco cta-deco--lila" />
  <img src="/img/shape (4).png" alt="" class="cta-deco cta-deco--fucsia" />
  <img src="/img/shape (2).png" alt="" class="cta-deco cta-deco--azul" />
  <img src="/img/shape (5).png" alt="" class="cta-deco cta-deco--naranja" />
  <img src="/img/shape (3).png" alt="" class="cta-deco cta-deco--lima" />

  <h2 class="cta-title">Want your brand<br>to look like this?</h2>
  <p class="cta-sub">I would love to fill this world with colorful products!</p>
  <a href="/contact" class="workhome-link">Let's talk!</a>
</section>

  </div>
</template>

<style scoped>

.brands-page {
  background:white;
  color: black;
  overflow-x: hidden;
}

.back-wrap {
  padding: 24px 5%;
  max-width: 1200px;
  margin: 0 auto;
}

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
  color: #FF7BB5;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 40px 5% 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-deco {
  position: absolute;
  pointer-events: none;
  height: auto;
}

.hero-deco--lila {
  width: 180px;
  top: -50px;
  right: 15%;
  transform: rotate(-8deg);
}

.hero-deco--naranja {
  width: 150px;
  top: 10px;
  right: -30px;
}

.hero-deco--azul {
  width: 150px;
  top: 65%;
  right: 26%;
  transform: translateY(-50%);
}

.hero-deco--lima {
  width: 180px;
  bottom: 20px;
  right: 0px;
  transform: rotate(15deg);
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
  font-size: 20px;
  line-height: 1.7;
  color: black;
  margin: 0 0 36px 0;
  max-width: 560px;
}

.services-section {
  padding: 60px;
  background:  #FFC7EA;
}

.section-label {
  font-family: 'myfont', sans-serif !important;
  font-size: 45px;
  text-align: center;  
  color: black;
  margin: 0 0 -20px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
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
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1500px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 20px;
  border: 4px solid white;  
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.service-card:hover { transform: translateY(-4px); }

.service-title {
  margin: 20px 24px 0;
  font-size:30px;
  text-align: center;           
}

.service-desc {
  margin: 8px 20px 40px; 
  text-align: center;
}
.service-img {
  width: calc(100% - 32px); 
  margin: 16px 16px 0;         
  aspect-ratio: 4/5;  
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.cta-section {
  position: relative;    /* ← agregá */
  overflow: hidden;      /* ← agregá, para que las que se salen del borde se recorten prolijo */
  padding: 100px 5% 40px;
  text-align: center;
  background: white;
}

.cta-deco {
  position: absolute;
  pointer-events: none;
  height: auto;
}

.cta-deco--lila {
  width: 160px;
  top: 60px;
  left: 15%;
  transform: rotate(-8deg);
}

.cta-deco--fucsia {
  width: 180px;
  top: 15px;
  right: -80px;
}

.cta-deco--azul {
  width: 220px;
  top: 80%;
  left: 5%;
  transform: translateY(-50%);
}

.cta-deco--naranja {
  width: 140px;
  top: 55%;
  right: 20px;
  transform: translateY(-50%);
}

.cta-deco--lima {
  width: 160px;
  bottom: 10px;
  right: 22%;
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
  font-family: 'MyFont', sans-serif !important;
  font-size: 60px;
  color: black;
  margin: 0 0 32px 0;
  text-transform: uppercase;
}

.workhome-link {
  font-size: 35px;
  color: #FF7BB5;
  margin-bottom: 50px;
  display: block;     
  margin-top: 44px;  
}

.btn-pink {
  display: inline-block;
  padding: 14px 32px;
  background: #D9FB60;
  color: black;
  border: none;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 450;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s;
}
.btn-pink:hover { transform: scale(1.04); }


/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero {
    padding: 20px 5% 60px;
  }

  .hero-sub {
    font-size: 16px;
  }

  .hero-deco--lila {
    width: 100px;
    top: -20px;
    right: 10%;
  }

  .hero-deco--naranja {
    width: 80px;
    top: 0;
    right: -20px;
  }

  .hero-deco--azul {
    width: 90px;
    top: 60%;
    right: 15%;
  }

  .hero-deco--lima {
    width: 100px;
    bottom: 0;
    right: -10px;
  }

  .services-section {
    padding: 40px 5%;
  }

  .section-label {
    font-size: 28px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .service-title {
    font-size: 22px;
  }

  .service-desc {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .cta-section {
    padding: 60px 5% 40px;
  }

  .cta-title {
    font-size: 44px;
  }

  .cta-sub {
    font-size: 32px;
  }

  .workhome-link {
    font-size: 24px;
  }

  .cta-deco--lila {
    width: 90px;
    top: 20px;
    left: 5%;
  }

  .cta-deco--fucsia {
    width: 100px;
    top: 0;
    right: -30px;
  }

  .cta-deco--azul {
    width: 110px;
    top: 75%;
    left: -10px;
  }

  .cta-deco--naranja {
    width: 80px;
    top: 50%;
    right: 5px;
  }

  .cta-deco--lima {
    width: 90px;
    bottom: 0;
    right: 10%;
  }
}

@media (max-width: 500px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-deco {
    display: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .section-label {
    font-size: 22px;
  }

  .cta-title {
    font-size: 32px;
  }

  .cta-sub {
    font-size: 24px;
  }

  .workhome-link {
    font-size: 20px;
  }

  .cta-deco {
    display: none;
  }
}
</style>