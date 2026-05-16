<script setup lang="ts">
import { ref } from 'vue';
// icons
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
const show1 = ref(false);
const password = ref('');
const email = ref('');
const firstname = ref('');
const lastname = ref('');
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-center mb-0">Sign up</h3>
    <router-link to="/authentication/login" class="text-primary text-decoration-none">Already have an account?</router-link>
  </div>
  <form class="mt-7 loginForm">
    <v-row class="my-0">
      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>First Name*</v-label>
          <v-text-field v-model="firstname" variant="outlined" class="mt-2" color="primary" placeholder="John" hide-details></v-text-field>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <v-label>Last Name*</v-label>
          <v-text-field v-model="lastname" variant="outlined" class="mt-2" color="primary" placeholder="Doe" hide-details></v-text-field>
        </div>
      </v-col>
    </v-row>
    <div class="mb-6">
      <v-label>Company</v-label>
      <v-text-field hide-details="auto" variant="outlined" class="mt-2" color="primary" placeholder="Demo Inc."></v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="email"
        placeholder="demo@company.com"
        class="mt-2"
        variant="outlined"
        color="primary"
        hide-details
      ></v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        placeholder="*****"
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

    <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
      <h6 class="text-label-small">
        By Signing up, you agree to our
        <router-link to="/authentication/register" class="text-primary link-hover font-weight-medium">Terms of Service </router-link>
        and
        <router-link to="/authentication/register" class="text-primary link-hover font-weight-medium">Privacy Policy</router-link>
      </h6>
    </div>
    <v-btn color="primary" block class="mt-4" variant="flat" size="large" type="submit">Create Account</v-btn>
  </form>
</template>
