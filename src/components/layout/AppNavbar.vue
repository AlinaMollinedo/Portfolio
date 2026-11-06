<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, X } from '@lucide/vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { useActiveSection } from '../../composables/useActiveSection'

const { activeSection } = useActiveSection()
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact'},
  
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function isActive(href: string): boolean {
  return activeSection.value === href.replace('#', '')
}

function handleNavClick(href: string) {
  closeMobileMenu()
  const element = document.querySelector(href)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="navbar" role="banner">
    <nav class="navbar__inner container" aria-label="Main navigation">
      <a href="#hero" class="navbar__wordmark" @click.prevent="handleNavClick('#hero')">
        <span class="navbar__wordmark-text">Alina's Portfolio</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="navbar__links" role="list">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="navbar__link"
            :class="{ 'navbar__link--active': isActive(item.href) }"
            @click.prevent="handleNavClick(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
        <li>
          <a
            href="#"
            class="navbar__link navbar__link--resume"
            aria-label="Download résumé"
          >
            Résumé
          </a>
        </li>
      </ul>

      <div class="navbar__actions">
        <ThemeToggle />
        <button
          class="navbar__menu-toggle"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <Transition name="menu-icon" mode="out-in">
            <X v-if="isMobileMenuOpen" :size="24" :stroke-width="1.5" key="close" />
            <Menu v-else :size="24" :stroke-width="1.5" key="menu" />
          </Transition>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div class="mobile-menu__overlay" @click="closeMobileMenu" />
        <div class="mobile-menu__panel">
          <nav class="mobile-menu__nav" aria-label="Mobile navigation">
            <ul class="mobile-menu__links" role="list">
              <li v-for="(item, index) in navItems" :key="item.href">
                <a
                  :href="item.href"
                  class="mobile-menu__link"
                  :class="{ 'mobile-menu__link--active': isActive(item.href) }"
                  :style="{ animationDelay: `${index * 60}ms` }"
                  @click.prevent="handleNavClick(item.href)"
                >
                  {{ item.label }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="mobile-menu__link mobile-menu__link--resume"
                  :style="{ animationDelay: `${navItems.length * 60}ms` }"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
          <div class="mobile-menu__footer">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background-color: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: var(--border-width) solid var(--nav-border);
  transition: background-color var(--transition-theme), border-color var(--transition-theme);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.navbar__wordmark {
  text-decoration: none;
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.navbar__wordmark-text {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-tight);
}

.navbar__wordmark:hover {
  color: var(--text-accent);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.navbar__link {
  position: relative;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  letter-spacing: var(--tracking-wide);
}

.navbar__link:hover {
  color: var(--text-primary);
  background-color: var(--interactive-hover);
}

.navbar__link--active {
  color: var(--text-accent);
}

.navbar__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background-color: var(--accent-primary);
}

.navbar__link--resume {
  color: var(--text-accent);
  font-weight: var(--weight-semibold);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.navbar__menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.navbar__menu-toggle:hover {
  background-color: var(--interactive-hover);
}

/* Mobile */
@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .navbar__menu-toggle {
    display: flex;
  }
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
}

.mobile-menu__overlay {
  position: absolute;
  inset: 0;
  background-color: var(--overlay);
}

.mobile-menu__panel {
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-8) var(--space-6);
  overflow-y: auto;
}

.mobile-menu__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.mobile-menu__link {
  display: block;
  padding: var(--space-4) var(--space-4);
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-medium);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  animation: fadeInUp 0.4s ease both;
}

.mobile-menu__link:hover {
  background-color: var(--interactive-hover);
  color: var(--text-accent);
}

.mobile-menu__link--active {
  color: var(--text-accent);
}

.mobile-menu__link--resume {
  color: var(--text-accent);
}

.mobile-menu__footer {
  display: flex;
  justify-content: center;
  padding-top: var(--space-8);
  border-top: var(--border-width) solid var(--border-secondary);
}

/* Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu__panel {
  transition: transform 0.35s ease;
}

.mobile-menu-leave-active .mobile-menu__panel {
  transition: transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu__panel {
  transform: translateY(-10px);
}

.mobile-menu-leave-to .mobile-menu__panel {
  transform: translateY(-10px);
}

/* Menu icon transition */
.menu-icon-enter-active,
.menu-icon-leave-active {
  transition: all 0.2s ease;
}

.menu-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg);
}

.menu-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
