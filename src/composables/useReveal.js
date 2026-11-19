import { onMounted, onBeforeUnmount } from 'vue'

// Adds the class "in" to every [data-reveal] element when it scrolls into view.
// CSS does the animating (see the .reveal rules in each page).
export function useReveal(root) {
  let io
  onMounted(() => {
    const els = (root?.value || document).querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.18 })
    els.forEach((e) => io.observe(e))
  })
  onBeforeUnmount(() => io && io.disconnect())
}
