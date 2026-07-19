<script setup>
import { ref } from 'vue';

const emailCopied = ref(false);
const copyEmail = () => {
  navigator.clipboard.writeText('vrotondaro@hotmail.com');
  emailCopied.value = true;
  setTimeout(() => { emailCopied.value = false; }, 2000);
};
</script>

<template>
  <div class="contact-page">

    <!-- ─── CONTACT ──────────────────────────────────────── -->
    <section class="contact-section">
      <div class="contact-inner">

        <div class="contact-left">
          <h1 class="contact-title">Let's connect!</h1>
          <div class="contact-links">
            <div class="contact-email-wrap">
              <a href="mailto:vrotondaro@hotmail.com" class="contact-email">vrotondaro@hotmail.com</a>
              <button class="copy-btn" @click.stop="copyEmail" :class="{ copied: emailCopied }">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7BB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" class="contact-social">↗ LinkedIn</a>
            <a href="https://www.instagram.com/valenrotondaro/" target="_blank" class="contact-social">↗ Instagram</a>
          </div>
        </div>

        <div class="contact-right">
          <div class="contact-sticker">
            <span class="contact-sticker-text">GREAT THINGS CAN HAPPEN <br> WITH A SIMPLE "HELLO!"</span>
          </div>
          <img src="/img/flechaabout.png" alt="" class="contact-hola-arrow" />
          <img src="/img/valpolaroid.png" alt="Valen" class="contact-photo" />
          <a href="/cv" target="_blank">
            <img src="/img/cvnote.png" alt="My CV" class="contact-cvnote" />
          </a>
          <img src="/img/collage.png" alt="" class="contact-collage" />
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>

.contact-page {
  font-family: 'BethanyElingston', sans-serif;
  background: #fff;
  color: #111;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.contact-section {
  width: 100%;
  padding: 10px 5% 10px;
}

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* ─── LEFT ──────────────────────────────────────────────── */
.contact-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 90px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: black;
  margin-bottom: 30px;
  line-height: 1;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.contact-email-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-email {
  font-size: 20px;
  color: #FF7BB5;
  text-decoration: none;
  font-weight: 500;
}


.contact-social {
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: 450;
  transition: color 0.2s;
}

.contact-social:hover { color: #FF7BB5; }

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.copy-btn:hover { transform: scale(1.1); }
.copy-btn.copied svg { stroke: #D9FB60; }

/* ─── RIGHT ─────────────────────────────────────────────── */
.contact-right {
  position: relative;
  width: 420px;
  height: 520px;
  padding: 40px;
  margin-top: 40px; 
}

.contact-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 100px;
}

.contact-sticker {
  position: absolute;
  top: -10px;
  left: 10px;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  z-index: 5;
  white-space: nowrap;
  transform: rotate(-2deg);
}

.contact-sticker-text {
  font-family: 'MyFont', sans-serif !important;
  font-size: 60px;
  letter-spacing: 0.04em;
  line-height: 0.5;
  color: black;
  text-transform: uppercase;
}

.contact-hola-arrow {
 position: absolute;
  width: 80px;
  height: auto;
  top: 70px;
  left: 20px;
  z-index: 5;
  transform: rotate(260deg);
}

.contact-photo {
  position: absolute;
  width: 290px;
  height: auto;
  object-fit: contain;
  top: 80px;
  left: 100px;
  z-index: 2;
}

.contact-cvnote {
  position: absolute;
  width: 160px;
  height: auto;
  top: 350px;
  left: 20px;
  z-index: 1;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.contact-cvnote:hover {
  transform: rotate(10deg)  !important;
}

.contact-collage {
  position: absolute;
  width: 130px;
  height: auto;
  top: 360px;
  right: 10px;
  z-index: 3;
  transform: rotate(3deg);
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
  }

  .contact-title { font-size: 60px; }
  .contact-desc  { font-size: 18px; }

  .contact-right {
    width: 100%;
    height: 420px;
  }

  .contact-photo { width: 220px; left: 60px; }
  .contact-cvnote { width: 130px; }
}

@media (max-width: 500px) {
  .contact-title { font-size: 48px; }
  .contact-desc  { font-size: 16px; }
}
</style>