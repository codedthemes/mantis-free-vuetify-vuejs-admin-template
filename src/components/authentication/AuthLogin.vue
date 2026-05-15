<script setup lang="ts">
import { ref } from 'vue';
// icons
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
const checkbox = ref(false);
const show1 = ref(false);
const password = ref('');
const username = ref('');
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-center mb-0">Login</h3>
    <router-link to="/authentication/register" class="text-primary text-decoration-none">Don't Have an account?</router-link>
  </div>
  <form class="mt-7 loginForm">
    <div class="mb-6">
      <v-label>Email Address</v-label>
      <v-text-field
        aria-label="email address"
        v-model="username"
        class="mt-2"
        variant="outlined"
        color="primary"
        hide-details
      ></v-text-field>
    </div>
    <div>
      <v-label>Password</v-label>
      <v-text-field
        aria-label="password"
        v-model="password"
        variant="outlined"
        color="primary"
        :type="show1 ? 'text' : 'password'"
        class="mt-2"
        hide-details
      >
        <template v-slot:append-inner>
          <v-btn color="secondary" icon rounded variant="text">
            <EyeInvisibleOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == false" @click="show1 = !show1" />
            <EyeOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == true" @click="show1 = !show1" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
      <v-checkbox v-model="checkbox" label="Keep me sign in" color="primary" class="ms-n2" hide-details></v-checkbox>
      <div class="ml-auto">
        <router-link to="/authentication/login" class="text-darkText link-hover">Forgot Password?</router-link>
      </div>
    </div>
    <v-btn color="primary" block class="mt-5" variant="flat" size="large" type="submit"> Login </v-btn>
  </form>
</template>

<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
