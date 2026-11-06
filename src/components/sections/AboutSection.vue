<script setup lang="ts">
import SectionHeading from '../ui/SectionHeading.vue'
import { useSectionReveal } from '../../composables/useSectionReveal'

const { sectionRef, isVisible } = useSectionReveal()
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="about section"
    :class="{ 'is-visible': isVisible }"
    aria-label="About me"
  >
    <div class="about__inner container">
      <SectionHeading
        label="About"
        title="A bit about me"
      />

      <div class="about__content">
        <div class="about__text">
          <p class="about__paragraph about__paragraph--lead">
            I'm <span class="about__name">Alina Mollinedo</span>, a Systems Engineering student with a curious mind and a soft spot for understanding how things work.
          </p>
          <p class="about__paragraph">
            I enjoy exploring the space between abstract ideas and tangible solutions, 
            finding ways to translate the complexity of everyday life into systems that make sense.
          </p>
          <p class="about__paragraph">
            I tend to approach things calmly and thoughtfully, valuing collaboration, open communication, and different 
            ways of thinking. I believe the little details matter, both in how software works and how people experience it.
          </p>
          <p class="about__paragraph">
            Outside of coding, you'll probably find me enjoying video games, music, or exploring other creative interests 
            that keep me inspired.
          </p>
          <p class="about__paragraph">
            A little bit of logic, a little bit of creativity, and a whole lot of curiosity!
          </p>
        </div>

        <aside class="about__aside" aria-label="Personal details">
          <div class="about__detail-card">
            <span class="about__detail-label">Driven By</span>
            <span class="about__detail-value">Curiosity</span>
          </div>
          <div class="about__detail-card">
            <span class="about__detail-label">Drawn To</span>
            <span class="about__detail-value">Logic & Creativity</span>
          </div>
          <div class="about__detail-card">
            <span class="about__detail-label">Outside Code</span>
            <span class="about__detail-value">Games, Music & Creative Works</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--bg-secondary);
  transition: background-color var(--transition-theme);
}

.about__content {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: var(--space-16);
  align-items: start;
}

.about__text {
  max-width: 40rem;
}

.about__paragraph {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
}

.about__paragraph--lead {
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
  color: var(--text-primary);
  line-height: var(--leading-normal);
}

.about__name {
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
}

.about__aside {
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: var(--space-4);
  padding-top: var(--space-2);
}

.about__detail-card {
  margin-top: var(--space-4);
  padding: var(--space-4);
  background-color: var(--bg-surface);
  border: var(--border-width) solid var(--border-secondary);
  border-radius: var(--radius-lg);
  transition: all var(--transition-theme);
}

.about__detail-label {
  display: block;
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-accent);
  margin-bottom: var(--space-1);
}

.about__detail-value {
  font-weight: var(--weight-medium);
  color: var(--text-primary);
}

/* Reveal animation */
.about__content {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.is-visible .about__content {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .about__aside {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .about__detail-card {
    flex: 1;
    min-width: 10rem;
  }
}

@media (max-width: 480px) {
  .about__aside {
    flex-direction: column;
  }

  .about__detail-card {
    min-width: unset;
  }
}
</style>
