<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  isExternal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const tag = props.href ? 'a' : 'button'
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="base-button"
    :class="[`base-button--${variant}`, `base-button--${size}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
  line-height: 1;
}

.base-button:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Sizes */
.base-button--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.base-button--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
}

.base-button--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

/* Variants */
.base-button--primary {
  background-color: var(--accent-primary);
  color: var(--text-on-accent);
  border: var(--border-width-2) solid var(--accent-primary);
}

.base-button--primary:hover {
  background-color: var(--accent-primary-hover);
  border-color: var(--accent-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.base-button--secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: var(--border-width) solid var(--border-primary);
}

.base-button--secondary:hover {
  border-color: var(--accent-primary);
  color: var(--text-accent);
  background-color: var(--interactive-hover);
}

.base-button--ghost {
  background-color: transparent;
  color: var(--text-accent);
  border: var(--border-width-2) solid transparent;
}

.base-button--ghost:hover {
  background-color: var(--interactive-hover);
}

.base-button--outline {
  background-color: transparent;
  color: var(--accent-primary);
  border: var(--border-width-2) solid var(--accent-primary);
}

.base-button--outline:hover {
  background-color: var(--accent-primary);
  color: var(--text-on-accent);
}

.base-button:active {
  transform: translateY(0);
}
</style>
