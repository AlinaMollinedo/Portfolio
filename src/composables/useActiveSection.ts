import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')

export function useActiveSection() {
  let observer: IntersectionObserver | null = null

  function setupObserver() {
    const sections = document.querySelectorAll('section[id]')

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer!.observe(section))
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
  }
}
