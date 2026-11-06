<script setup lang="ts">
interface Props {
  label?: string
  title: string
  description?: string
  alignment?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  alignment: 'left',
})
</script>

<template>
  <div class="section-heading" :class="`section-heading--${alignment}`">
    <span v-if="label" class="section-heading__label">{{ label }}</span>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  margin-bottom: var(--space-12);
}

.section-heading--center {
  text-align: center;
}

.section-heading__label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-accent);
  margin-bottom: var(--space-3);
}

.section-heading__title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  line-height: var(--leading-tight);
}

.section-heading__description {
  margin-top: var(--space-4);
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 36rem;
  line-height: var(--leading-relaxed);
}

.section-heading--center .section-heading__description {
  margin-inline: auto;
}

@media (max-width: 768px) {
  .section-heading__title {
    font-size: var(--text-3xl);
  }

  .section-heading__description {
    font-size: var(--text-base);
  }

  .section-heading {
    margin-bottom: var(--space-8);
  }
}
</style>
