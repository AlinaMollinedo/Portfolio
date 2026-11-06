<script setup lang="ts">
import { Heart } from '@lucide/vue'
import IconLink from '../ui/IconLink.vue'

const socialLinks = [
  { icon: 'github', href: 'https://github.com/AlinaMollinedo', label: 'GitHub' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/alina-mollinedo-dávila-6b7400449', label: 'LinkedIn' },
  { icon: 'mail', href: 'mailto:alina.mollinedo@gmail.com', label: 'alina.mollinedo@gmail.com' },
  { icon: 'resume', href: '#', label: 'Résumé' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__wordmark">Alina's Portfolio</span>
          <p class="footer__tagline">
            making sense of things, one system at a time.
          </p>
        </div>

        <div class="footer__links">
          <IconLink
            v-for="link in socialLinks"
            :key="link.label"
            :icon="link.icon"
            :href="link.href"
            :label="link.label"
          />
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} &middot; Designed & built with logic and a little wonder
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: var(--border-width) solid var(--border-secondary);
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-theme), border-color var(--transition-theme);
}

.footer__inner {
  padding-block: var(--space-12);
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.footer__brand {
  max-width: 20rem;
}

.footer__wordmark {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  letter-spacing: var(--tracking-tight);
}

.footer__tagline {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  line-height: var(--leading-relaxed);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.footer__bottom {
  padding-top: var(--space-6);
  border-top: var(--border-width) solid var(--border-subtle);
}

.footer__copyright {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.footer__heart {
  color: var(--accent-warm);
  display: inline-block;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .footer__top {
    flex-direction: column;
    gap: var(--space-6);
  }

  .footer__links {
    gap: var(--space-1);
  }
}
</style>
