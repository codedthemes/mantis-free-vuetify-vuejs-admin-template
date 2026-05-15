<script setup lang="ts">
// assets
import avatarGroup from '@/assets/images/users/avatar-group.png';
</script>

<template>
  <v-sheet rounded="md" color="gray100" class="pa-4 ExtraBox hide-menu text-center" border>
    <div class="d-flex align-center flex-column">
      <v-img :src="avatarGroup" alt="book" height="116px" width="169px" cover></v-img>
      <div class="px-3">
        <h5 class="mb-1">Mantis Pro</h5>
        <h6 class="text-lightText" style="line-height: 1.2">Get more features with pro version</h6>
      </div>
    </div>
    <div class="mt-5">
      <a
        href="https://codedthemes.com/item/mantis-vue-admin-template/"
        target="_blank"
        class="v-btn v-theme--DefaultTheme bg-primary v-btn--density-default v-btn--size-default v-btn--variant-flat primary-shadow"
        >Upgrade to pro</a
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
