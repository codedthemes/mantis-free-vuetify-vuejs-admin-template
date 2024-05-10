<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useTodostore } from "../../stores/todos";
import { storeToRefs } from "pinia";
const todosStore = useTodostore();
const { todos } = storeToRefs(todosStore);

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Todos' });
const breadcrumbs = shallowRef([
  {
    title: 'Test',
    disabled: false,
    href: '#'
  },
  {
    title: 'Todos',
    disabled: true,
    href: '#'
  }
]);

todosStore.getAll();
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <UiTitleCard title="Tarefas" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">ID</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Título</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Concluída</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in todos" :key="task.id">
          <td class="py-3">{{ task.id }}</td>
          <td class="py-3">{{ task.title }}</td>
          <td class="py-3">{{ task.completed ? 'Sim' : 'Não' }}</td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>
