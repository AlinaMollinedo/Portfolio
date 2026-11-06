<script setup lang="ts">
import { CodeXml, Globe, Mail, FileText } from '@lucide/vue'
import { computed } from 'vue'

const props = defineProps<{
  icon: string
  href: string
  label: string
}>()

const iconComponent = computed(() => {
  const icons: Record<string, any> = {
    github: CodeXml,
    linkedin: Globe,
    mail: Mail,
    resume: FileText,
  }
  return icons[props.icon] || Mail
})
</script>

<template>
  <a
    :href="href"
    class="icon-link"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    :title="label"
  >
    <component :is="iconComponent" :size="20" :stroke-width="1.5" />
    <span class="icon-link__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  text-decoration: none;
}

.icon-link:hover {
  color: var(--text-accent);
  background-color: var(--interactive-hover);
}

.icon-link:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.icon-link__label {
  letter-spacing: var(--tracking-wide);
}
</style>
