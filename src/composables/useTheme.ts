import { ref, watch, onMounted } from 'vue'
import type { Theme } from '../types'

const theme = ref<Theme>('light')
const isInitialized = ref(false)

export function useTheme() {
  function getSystemPreference(): Theme {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function getSavedTheme(): Theme | null {
    if (typeof window === 'undefined') return null
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return null
  }

  function applyTheme(newTheme: Theme) {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function initTheme() {
    if (isInitialized.value) return
    const saved = getSavedTheme()
    theme.value = saved ?? getSystemPreference()
    applyTheme(theme.value)
    isInitialized.value = true
  }

  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  onMounted(() => {
    initTheme()
  })

  return {
    theme,
    toggleTheme,
    initTheme,
  }
}
