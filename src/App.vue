<script setup lang="ts">
import { useTheme } from './composables/useTheme'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
//import WorkSection from './components/sections/WorkSection.vue'
//import SkillsSection from './components/sections/SkillsSection.vue'
//import BeyondCodeSection from './components/sections/BeyondCodeSection.vue'
//import ExperienceSection from './components/sections/ExperienceSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

// Initialize theme on app mount
useTheme()
</script>

<template>
  <AppNavbar />
  <main id="main-content">
    <HeroSection />
    <AboutSection />
    <!-- <WorkSection />
    <SkillsSection />
    <BeyondCodeSection />
    <ExperienceSection /> -->
    <ContactSection />
  </main>
  <AppFooter />
</template>

<style>
/* App-level styles are minimal — all design tokens and base
   styles live in variables.css and base.css */
</style>
