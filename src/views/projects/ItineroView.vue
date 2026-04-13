<template>
  <div class="project-detail">
    <nav class="project-nav">
      <router-link to="/Portfolio" class="back-link">
        <span class="arrow">←</span> Back to Works
      </router-link>
    </nav>

    <main class="project-content">
      <header class="project-header">
        <div class="header-info">
          <span class="category-tag">UX/UI Design</span>
          <h1>Itinero</h1>
          <p class="project-intro">
            A mobile application designed to simplify and enhance travel experiences by organizing itineraries and discovering hidden gems.
          </p>
        </div>
      </header>

      <section class="hero-section">
        <div class="hero-wrapper">
          <img src="/img/itineroapp.png" alt="Itinero App Mockup" class="hero-image" />
        </div>
      </section>

      <section class="project-details-grid">
        <div class="detail-item">
          <h3>The Challenge</h3>
          <p>
            Travelers often struggle with fragmented information across multiple apps. Itinero aims to centralize bookings, maps, and suggestions in one intuitive interface.
          </p>
        </div>
        <div class="detail-item">
          <h3>My Role</h3>
          <p>
            End-to-end UX/UI Design, from initial user research and wireframing to high-fidelity prototyping and visual identity.
          </p>
        </div>
      </section>

      <section class="project-gallery">
        <div class="gallery-item">
          <div class="placeholder-box">
            <p>Insert more app screens here</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="project-footer-nav">
      <router-link to="/Portfolio" class="btn-lime">View more projects</router-link>
    </footer>
  </div>
</template>

<style scoped>
.project-detail {
  padding: 120px 8% 60px;
  background-color: white;
  color: black;
  min-height: 100vh;
}

.project-nav {
  margin-bottom: 60px;
}

.back-link {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 0.6;
}

.category-tag {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: #666;
}

.header-info h1 {
  font-size: clamp(40px, 8vw, 70px);
  font-weight: 450;
  margin: 10px 0 30px;
  letter-spacing: -0.02em;
}

.project-intro {
  font-size: 22px;
  line-height: 1.4;
  max-width: 800px;
  margin-bottom: 60px;
}

.hero-section {
  margin-bottom: 80px;
}

.hero-image {
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.project-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  margin-bottom: 100px;
}

.detail-item h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
}

.detail-item p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}

.placeholder-box {
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border: 2px dashed #ddd;
}

.project-footer-nav {
  text-align: center;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid #eee;
}

/* Reusando tu estilo de botón */
.btn-lime {
  display: inline-block;
  padding: 15px 40px;
  background-color: #E2FF54;
  color: black;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.btn-lime:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .project-detail {
    padding-top: 80px;
  }
}
</style>