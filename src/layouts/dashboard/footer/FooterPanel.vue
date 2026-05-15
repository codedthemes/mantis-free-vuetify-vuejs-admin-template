<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

const relativeURL = ref<string>('');

onMounted(async () => {
  try {
    relativeURL.value = import.meta.env.BASE_URL || '/'; // Fallback to '/'
  } catch (error) {
    console.error('Error url not found:', error);
  }
});

const footerLink = computed(() =>
  [
    {
      title: 'About us',
      link: 'https://codedthemes.com/about-us/'
    },
    {
      title: 'Privacy',
      link: 'https://codedthemes.com/privacy-policy/'
    },
    {
      title: 'Terms',
      link: 'https://codedthemes.com/terms-and-conditions/'
    }
  ].map((item) => ({
    ...item,
    link: item.link.startsWith('http') ? item.link : `${relativeURL.value}${item.link}`
  }))
);
</script>
<template>
  <v-footer class="px-0 py-0 footer">
    <v-row align="center" no-gutters>
      <v-col sm="6" cols="12">
        <p class="text-label-small text-darkText text-sm-start text-center mb-0">
          © All rights reserved
          <a href="https://codedthemes.com/" class="text-primary" target="_blank">CodedThemes</a>
        </p>
      </v-col>
      <v-col class="text-sm-end text-center" sm="6" cols="12">
        <a v-for="(item, i) in footerLink" :key="i" class="mx-2 text-label-small text-darkText" :href="item.link" target="_blank">
          {{ item.title }}
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>
