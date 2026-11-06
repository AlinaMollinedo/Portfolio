import { ref, onMounted, onUnmounted } from 'vue'

export function useSectionReveal(threshold = 0.15) {
  const isVisible = ref(false)
  const sectionRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!sectionRef.value) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(sectionRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    sectionRef,
    isVisible,
  }
}
