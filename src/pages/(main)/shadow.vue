<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Shadows' });
const breadcrumbs = ref([
  {
    title: 'Shadow',
    disabled: true,
    href: '#'
  }
]);

const colorShadow = ref(['primary', 'secondary', 'info', 'success', 'warning', 'error']);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Basic Shadow">
        <v-row>
          <v-col v-for="n in 6" :key="n" lg="2" sm="3" cols="6">
            <v-card height="100" :class="['d-flex justify-center align-center flex-column', `elevation-${n - 1}`]">
              <h6>elevation</h6>
              <div>{{ n - 1 }}</div>
            </v-card>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
    <v-col cols="12" md="12">
      <UiParentCard title="Color Shadow">
        <v-row>
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="`${color}`">
            <v-card :class="`${color}-shadow bg-${color} px-4 py-5 text-center`">
              <div>{{ color }}</div>
            </v-card>
          </v-col>
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="`${color}-custom`">
            <v-card :class="`custom-${color}-shadow text-${color} px-4 py-5 text-center`">
              <div>{{ color }}</div>
            </v-card>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
