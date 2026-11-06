<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '../../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
    :title="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
  >
    <Transition name="theme-icon" mode="out-in">
      <Sun v-if="theme === 'dark'" :size="20" :stroke-width="1.5" key="sun" />
      <Moon v-else :size="20" :stroke-width="1.5" key="moon" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.theme-toggle:hover {
  color: var(--text-accent);
  background-color: var(--interactive-hover);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.25s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>
