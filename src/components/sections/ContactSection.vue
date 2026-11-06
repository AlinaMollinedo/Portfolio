<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import SectionHeading from '../ui/SectionHeading.vue'
import IconLink from '../ui/IconLink.vue'
import BaseButton from '../ui/BaseButton.vue'
import { useSectionReveal } from '../../composables/useSectionReveal'

const { sectionRef, isVisible } = useSectionReveal()

const links = [
  { icon: 'github', href: 'https://github.com/AlinaMollinedo', label: 'GitHub' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/alina-mollinedo-dávila-6b7400449', label: 'LinkedIn' },
  { icon: 'mail', href: 'mailto:alina.mollinedo@gmail.com', label: 'alina.mollinedo@gmail.com' },
]
</script>

<template>
  <section
    id="contact"
    ref="sectionRef"
    class="contact section"
    :class="{ 'is-visible': isVisible }"
    aria-label="Contact"
  >
    <div class="contact__inner container">
      <div class="contact__content">
        <SectionHeading
          label="Contact"
          title="Say hello sometime!"
          description="Always open to new ideas, meaningful conversations, and exciting things to create together. I'd love to hear from you!"
          alignment="center"
        />

        <div class="contact__links">
          <IconLink
            v-for="link in links"
            :key="link.label"
            :icon="link.icon"
            :href="link.href"
            :label="link.label"
          />
        </div>

        <div class="contact__cta">
          <BaseButton variant="primary" size="lg" href="#">
            Get in touch
            <ArrowUpRight :size="18" :stroke-width="2" aria-hidden="true" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__content {
  max-width: 36rem;
  margin-inline: auto;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.is-visible .contact__content {
  opacity: 1;
  transform: translateY(0);
}

.contact__links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.contact__cta {
  display: flex;
  justify-content: center;
}
</style>
