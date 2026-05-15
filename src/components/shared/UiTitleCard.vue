<script setup lang="ts">
const props = defineProps({
  title: String,
  className: String
});
</script>

<template>
  <v-card class="title-card" variant="text" rounded="md">
    <v-card-item class="pb-2 px-0 pt-0">
      <v-card-title class="text-headline-medium text-darkText" style="line-height: 1.5">{{ props.title }}</v-card-title>
    </v-card-item>
    <v-card-text variant="outlined" :class="`${props.className} overflow-hidden rounded-md`">
      <slot />
    </v-card-text>
  </v-card>
</template>
