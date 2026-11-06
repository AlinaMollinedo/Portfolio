<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="tech-tag">{{ label }}</span>
</template>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--tag-text);
  background-color: var(--tag-bg);
  border: var(--border-width) solid var(--tag-border);
  border-radius: var(--radius-full);
  letter-spacing: var(--tracking-wide);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.tech-tag:hover {
  background-color: var(--accent-primary);
  color: var(--text-on-accent);
  border-color: var(--accent-primary);
}
</style>
