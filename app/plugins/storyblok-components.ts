import { defineNuxtPlugin } from '#app'
import Card from '../storyblok/Card.vue'
import Cards from '../storyblok/Cards.vue'
import ContactForm from '../storyblok/ContactForm.vue'
import FormField from '../storyblok/FormField.vue'
import Hero from '../storyblok/Hero.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('storyblok-card', Card);
  nuxtApp.vueApp.component('storyblok-cards', Cards);
  nuxtApp.vueApp.component('storyblok-contact-form', ContactForm);
  nuxtApp.vueApp.component('storyblok-form-field', FormField);
  nuxtApp.vueApp.component('storyblok-hero', Hero);
})