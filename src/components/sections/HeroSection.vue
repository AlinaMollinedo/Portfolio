<script setup lang="ts">
import { ArrowDown, FileText } from '@lucide/vue'
import BaseButton from '../ui/BaseButton.vue'

function scrollToWork() {
  const element = document.querySelector('#work')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero section" aria-label="Introduction">
    <div class="hero__inner container">
      <div class="hero__content">
        <div class="hero__label-row">
          <span class="hero__label">Hello, I'm Alina</span>
          <span class="hero__label-line" aria-hidden="true" />
        </div>

        <h1 class="hero__title">
          <span class="hero__title-line">a little logic</span>
          <span class="hero__title-line hero__title-line--accent">lots of wonder</span>
        </h1>

        <p class="hero__description">
          I'm a Systems Engineering student who loves understanding how things work and 
          finding creative ways to turn real-world complexity into logical, meaningful systems.
        </p>

        <div class="hero__actions">
          <BaseButton variant="primary" size="lg" @click="scrollToWork">
            View my work
            <ArrowDown :size="18" :stroke-width="2" aria-hidden="true" />
          </BaseButton>
          <BaseButton variant="secondary" size="lg" href="#">
            <FileText :size="18" :stroke-width="1.5" aria-hidden="true" />
            Résumé
          </BaseButton>
        </div>
      </div>

      <div class="hero__visual" aria-hidden="true">
        <div class="hero__shape hero__shape--1" />
        <div class="hero__shape hero__shape--2" />
        <div class="hero__shape hero__shape--3" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--space-12);
  position: relative;
  z-index: 1;
}

.hero__content {
  max-width: 38rem;
}

.hero__label-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.hero__label {
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-accent);
  white-space: nowrap;
}

.hero__label-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    var(--accent-primary),
    transparent
  );
  max-width: 6rem;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-7xl);
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
}

.hero__title-line {
  display: block;
}

.hero__title-line--accent {
  color: var(--text-accent);
  font-style: italic;
}

.hero__description {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  max-width: 32rem;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Decorative Shapes */
.hero__visual {
  position: relative;
  width: 100%;
  height: 400px;
}

.hero__shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
  transition: background-color var(--transition-theme);
}

.hero__shape--1 {
  width: 300px;
  height: 300px;
  background-color: var(--accent-primary);
  top: 10%;
  right: 10%;
  border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
}

.hero__shape--2 {
  width: 180px;
  height: 180px;
  background-color: var(--accent-secondary);
  top: 50%;
  right: 40%;
  border-radius: 55% 45% 50% 50% / 40% 55% 45% 60%;
}

.hero__shape--3 {
  width: 120px;
  height: 120px;
  background-color: var(--accent-tertiary);
  top: 20%;
  right: 55%;
  border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
}

@media (max-width: 1024px) {
  .hero__title {
    font-size: var(--text-5xl);
  }

  .hero__visual {
    height: 300px;
  }

  .hero__shape--1 {
    width: 220px;
    height: 220px;
  }

  .hero__shape--2 {
    width: 140px;
    height: 140px;
  }

  .hero__shape--3 {
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: 8rem;
    padding-bottom: var(--space-16);
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__description {
    font-size: var(--text-base);
  }

  .hero__visual {
    height: 200px;
    order: -1;
  }

  .hero__shape--1 {
    width: 160px;
    height: 160px;
    right: 5%;
    top: 0;
  }

  .hero__shape--2 {
    width: 100px;
    height: 100px;
    right: 50%;
    top: 30%;
  }

  .hero__shape--3 {
    width: 70px;
    height: 70px;
    right: 70%;
    top: 10%;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .base-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero__title {
    font-size: var(--text-3xl);
  }
}
</style>
