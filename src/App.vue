<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div>
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="logo">
        <router-link to="/" @click="closeMenu" class="logo-text">VALEN ROTONDARO</router-link>
      </div>

      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ open: menuOpen }">
        <ul class="nav-links">
          <li><router-link to="/Portfolio/" active-class="active" @click="closeMenu">Works</router-link></li>
          <li><router-link to="/about" active-class="active" @click="closeMenu">About me</router-link></li>
          <li><router-link to="/collage-workshops" active-class="active" @click="closeMenu">Collage</router-link></li>
          <li><router-link to="/content-creation" active-class="active" @click="closeMenu">CC</router-link></li>
          <li><router-link to="/contact" active-class="active" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- PAGES -->
    <router-view />

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-logo">
      <router-link to="/" @click="closeMenu" class="logo-text">VALEN ROTONDARO</router-link>
      </div>
      <div class="social-links">       
        <a href="mailto:vrotondaro@hotmail.com">
          <img src="/img/email-icon.png" alt="Email" />
        </a>
         <a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank">
          <img src="/img/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/valenrotondaro" target="_blank">
          <img src="/img/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style>

@font-face {
  font-family: 'BethanyElingston';
  src: url('/fonts/BethanyElingston.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BiroScript';
  src: url('/fonts/Biro_Script_reduced.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'MyFont';
  src: url('/fonts/Myfont-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}




/* ── NAVBAR ── */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  position: relative; 
}



.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  transition: opacity 0.2s;
}

/* ── HAMBURGER (oculto en desktop) ── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 200;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: black;
  border-radius: 2px;
  transition: 0.3s ease;
}

.logo-text {
  font-family: 'MyFont', sans-serif;
  font-size: 50px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: #111;
  text-transform: uppercase;
}

/* ── FOOTER ── */
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
  margin-top: 40px;
}


.social-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.social-links img {
  height: 24px;
  width: auto;
  transition: opacity 0.2s;
}

.social-links a:hover img {
  opacity: 0.6;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  /* Navbar */
  .navbar {
    padding: 16px 24px;
  }

  .hamburger {
    display: flex;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    right: 16px;
    background: white;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 16px 24px;
    z-index: 99;
    min-width: 160px;
  }

  nav.open {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    gap: 16px;
  }

  /* Footer — igual que el wireframe: logo izq, iconos der */
  .footer {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 24px 24px 32px 24px;
    margin-top: 20px;
  }

 

  .social-links {
    gap: 16px;
  }

  .social-links img {
    height: 20px;
  }
}
</style>