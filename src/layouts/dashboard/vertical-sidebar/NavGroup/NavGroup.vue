<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-subheader color="lightText" class="smallCap text-body-small">{{ props.item.header }}</v-list-subheader>
</template>
