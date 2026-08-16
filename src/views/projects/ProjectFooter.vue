<script setup>
defineProps({
  nextTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer class="case-footer">
    <div class="pagination-wrapper">
      <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
      <router-link :to="nextTo" class="footer-link">Next project &gt;</router-link>
    </div>
  </footer>
</template>

<style scoped>
.case-footer {
  padding: 30px 5%;
  margin-top: 30px;
}

.pagination-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.footer-link {
  font-size: 28px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.footer-link:hover {
  opacity: 0.5;
}

@media (max-width: 500px) {
  .footer-link {
    font-size: 20px;
  }
}
</style>