<script setup>
</script>

<template>
  <div>
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="/img/logo-vr.png" alt="Logo VR" />
        </router-link>
      </div>

      <nav>
        <ul class="nav-links">
          <li>
            <router-link to="/" active-class="active" exact>Home</router-link>
          </li>
          <li class="dropdown">
            <router-link to="/Portfolio/" active-class="active">Work</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">About me</router-link>
          </li>
          <li>
            <router-link to="/cv" active-class="active">CV</router-link>
          </li>
          <li>
            <router-link to="/digital-playground" active-class="active">DP</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- PAGES -->
    <router-view />

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-logo">
        <router-link to="/">
          <img src="/img/logo-vr.png" alt="Valentina Rotondaro Logo" />
        </router-link>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank">
          <img src="/img/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/valenrotondaro" target="_blank">
          <img src="/img/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="mailto:vrotondaro@hotmail.com">
          <img src="/img/email-icon.png" alt="Email" />
        </a>
      </div>
    </footer>
  </div>
</template>


<style>
</style>