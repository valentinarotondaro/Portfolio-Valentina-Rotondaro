<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }

// ─── MAIL ICON: copy email instead of navigating ─────────────
const EMAIL = 'vrotondaro@hotmail.com'
const emailCopied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText(EMAIL)
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 2000)
}
</script>

<template>
  <div>
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="nav-shell">
        <router-link to="/" class="nav-logo" @click="closeMenu">
          <img src="/img/logo-vr.png" alt="Logo VR" />
        </router-link>

        <nav class="nav-pill">
          <router-link to="/Portfolio/" active-class="active" @click="closeMenu">Work</router-link>
          <router-link to="/about" active-class="active" @click="closeMenu">About</router-link>
          <router-link to="/cv" active-class="active" @click="closeMenu">Resume</router-link>
        </nav>

        <div class="mail-btn-wrap">
          <button type="button" class="mail-btn" aria-label="Copy email address" @click="copyEmail">
            <svg width="18" height="14" viewBox="0 0 20 16" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="18" height="14" rx="2" stroke="#1a1a1a" stroke-width="1.4"/>
              <path d="M1.5 2L10 9L18.5 2" stroke="#1a1a1a" stroke-width="1.4"/>
            </svg>
          </button>
          <transition name="toast-fade">
            <span v-if="emailCopied" class="email-toast">Email copied</span>
          </transition>
        </div>

        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="mobile-menu" :class="{ open: menuOpen }">
        <router-link to="/Portfolio/" active-class="active" @click="closeMenu">Work</router-link>
        <router-link to="/about" active-class="active" @click="closeMenu">About</router-link>
        <router-link to="/cv" active-class="active" @click="closeMenu">Resume</router-link>
        <button type="button" class="mobile-mail" @click="copyEmail">
          <span class="mobile-mail-icon">
            <svg width="13" height="10" viewBox="0 0 20 16" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="18" height="14" rx="2" stroke="#1a1a1a" stroke-width="1.6"/>
              <path d="M1.5 2L10 9L18.5 2" stroke="#1a1a1a" stroke-width="1.6"/>
            </svg>
          </span>
          {{ emailCopied ? 'Email copied' : 'Email' }}
        </button>
      </nav>
    </header>

    <!-- PAGES -->
    <router-view />

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-name-wrap" @click="copyEmail">
          <span class="footer-name">Valen Rotondaro</span>
          <transition name="toast-fade">
            <span v-if="emailCopied" class="footer-copy-tip footer-copy-tip--copied">Email copied</span>
            <span v-else class="footer-copy-tip">Click here to copy email</span>
          </transition>
        </div>

        <div class="footer-links">
          <span class="footer-link" @click="copyEmail">{{ EMAIL }}</span>
          <a class="footer-link" href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a class="footer-link" href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* ── NAVBAR ── */
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 5% 0;
  position: relative;
  z-index: 100;
}

.nav-shell {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 999px;
  padding: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
}

.nav-logo {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.nav-logo:hover {
  transform: scale(1.05);
}

.nav-logo img {
  width: 42px;
  height: auto;
  display: block;
}

.nav-pill {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 4px;
}

.nav-pill a {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 999px;
  transition: background 0.15s ease;
}

.nav-pill a:hover,
.nav-pill a.active {
  background: #f5f5f5;
}

.mail-btn-wrap {
  position: relative;
  flex-shrink: 0;
}

.mail-btn {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: var(--lima);
  border: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s ease;
}

.mail-btn:hover {
  transform: scale(1.06);
}

.email-toast {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: #1a1a1a;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 999px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 200;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.mobile-menu {
  display: none;
}

/* ── HAMBURGER (oculto en desktop) ── */
.hamburger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e3e3e3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 16px;
  height: 1.5px;
  background-color: black;
  border-radius: 2px;
  transition: 0.3s ease;
}

/* ── FOOTER ── */
/* A solid color band (brand bordeaux) so the page clearly "ends" —
   not just another white section. */
.footer {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 64px 24px 56px 0;
  margin-top: 60px;
  background: var(--bordeaux);
}

.footer-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.footer-name-wrap {
  position: relative;
  cursor: pointer;
  width: fit-content;
  align-self: flex-start;
  margin-right: auto;
  /* Push as far left as the band's own padding allows. */
  margin-left: 0;
}

.footer-name {
  display: block;
  /* Same typography as .hero-title, just smaller */
  font-size: clamp(32px, 5.5vw, 64px);
  font-weight: 500;
  color: var(--lima);
  letter-spacing: -0.03em;
  line-height: 1.04;
  transition: color 0.2s ease;
}

.footer-name-wrap:hover .footer-name {
  color: #fff;
}

.footer-copy-tip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  background: #1a1a1a;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 999px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
}

.footer-name-wrap:hover .footer-copy-tip {
  opacity: 1;
}

.footer-copy-tip--copied {
  background: var(--lima);
  color: #000;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

.footer-link {
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.footer-link:hover {
  opacity: 0.65;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  /* Navbar */
  .navbar {
    padding: 16px 5% 0;
  }

  .nav-shell {
    width: 100%;
    justify-content: space-between;
  }

  .nav-pill,
  .mail-btn {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
    margin: 10px auto 0;
    background: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-menu a,
  .mobile-menu button {
    text-decoration: none;
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 500;
    padding: 14px 16px;
    border-radius: 14px;
    background: none;
    border: none;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
  }

  .mobile-menu a.active {
    background: #f5f5f5;
  }

  .mobile-mail {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .mobile-mail-icon {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: var(--lima);
    border: 1px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Footer — stack vertical, nombre arriba, links abajo */
  .footer {
    padding: 36px 16px 24px 0;
    margin-top: 32px;
    gap: 28px;
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .footer-links {
    align-items: flex-start;
  }
}
</style>