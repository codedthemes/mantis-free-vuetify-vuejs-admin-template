<script setup lang="ts">
// assets
import avatarGroup from '@/assets/images/users/avatar-group.png';
</script>

<template>
  <v-sheet rounded="md" color="gray100" class="pa-4 ExtraBox hide-menu text-center" border>
    <div class="d-flex align-center flex-column">
      <v-img :src="avatarGroup" alt="book" height="116px" width="169px" cover></v-img>
      <div class="px-3">
        <h5 class="text-h5 mb-0 line-height-none">Help?</h5>
        <small class="text-lightText text-h6"> Get to resolve query</small>
      </div>
    </div>
    <div class="mt-5">
      <a
        href="https://codedthemes.support-hub.io/"
        target="_blank"
        class="v-btn v-theme--DefaultTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-flat primary-shadow"
        >Support</a
      >
    </div>
  </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
  position: relative;
  overflow: hidden;
}
.line-height-none {
  line-height: normal;
}
</style>
