<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { colorGroups } from '@/data/colors';

// component content
const page = ref({ title: 'Color' });
const breadcrumbs = ref([
  {
    title: 'Color',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <template v-for="(group, groupIdx) in colorGroups" :key="groupIdx">
      <v-col cols="12" sm="6" md="4">
        <UiParentCard :title="group.title">
          <div class="d-flex flex-column">
            <v-sheet
              v-for="(color, idx) in group.colors"
              :key="idx"
              :class="'pa-5 bg-' + color.name + (color.border ? ' border-sm border-opacity-100 border-dashed' : '')"
            >
              <div class="d-flex justify-space-between align-center">
                <div>
                  <h6>{{ color.label }}</h6>
                  <h6>{{ color.value }}</h6>
                </div>
                <h6>{{ color.name }}</h6>
              </div>
            </v-sheet>
          </div>
        </UiParentCard>
      </v-col>
    </template>
  </v-row>
</template>
