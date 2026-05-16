<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Typography' });
const breadcrumbs = ref([
  {
    title: 'Typography',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" lg="6">
      <v-row>
        <v-col cols="12">
          <UiParentCard title="Basic">
            <h1 class="mb-2">Public Sans</h1>
            <h5 class="mb-2">Font Family</h5>
            <v-breadcrumbs
              :items="['Regular', 'Medium', 'Bold']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Heading">
            <h1 class="mb-2">H1 Heading</h1>
            <v-breadcrumbs
              :items="['Size: 38px', 'Weight: Bold', 'Line Height: 46px']"
              class="text-headline-small text-lightText flex-wrap pa-0 mb-4"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h2 class="mb-2 mt-4">H2 Heading</h2>
            <v-breadcrumbs
              :items="['Size: 30px', 'Weight: Bold', 'Line Height: 38px']"
              class="text-headline-small text-lightText flex-wrap pa-0 mb-4"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h3 class="mb-2 mt-4">H3 Heading</h3>
            <v-breadcrumbs
              :items="['Size: 24px', 'Weight: Regular & Bold', 'Line Height: 32px']"
              class="text-headline-small text-lightText flex-wrap pa-0 mb-4"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h4 class="mb-2 mt-4">H4 Heading</h4>
            <v-breadcrumbs
              :items="['Size: 20px', 'Weight: Bold', 'Line Height: 28px']"
              class="text-headline-small text-lightText flex-wrap pa-0 mb-4"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h5 class="mb-2 mt-4">H5 Heading</h5>
            <v-breadcrumbs
              :items="['Size: 16px', 'Weight: Regular & Medium & Bold', 'Line Height: 24px']"
              class="text-headline-small text-lightText flex-wrap pa-0 mb-4"
            ></v-breadcrumbs>
            <v-divider></v-divider>
            <h6 class="mb-2 mt-4">H6 Heading / Subheading</h6>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Body medium">
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Label large">
            <h6 class="text-label-large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Body large">
            <p class="text-body-large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Bold', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Body small">
            <h6 class="text-body-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Medium', 'Line Height: 20px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Label small">
            <h6 class="text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="6">
      <v-row>
        <v-col cols="12">
          <UiParentCard title="Alignment">
            <p class="text-start text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-center text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-end mb-0 text-label-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Gutter Bottom">
            <h6 class="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <p class="text-label-small mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Label medium">
            <div class="text-label-medium text-uppercase mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <v-breadcrumbs
              :items="['Size: 12px', 'Weight: Regular', 'Line Height: 20px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Link">
            <a href="#" class="link-hover text-primary d-inline-block">mantisdashboard.com</a>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Colors">
            <h6 class="text-darkText mb-3">This is darkText text color.</h6>
            <h6 class="text-lightText mb-3">This is lightText text color.</h6>
            <h6 class="text-primary mb-3">This is primary text color.</h6>
            <h6 class="text-secondary mb-3">This is secondary text color.</h6>
            <h6 class="text-success mb-3">This is success text color.</h6>
            <h6 class="text-warning mb-3">This is warning text color.</h6>
            <h6 class="text-error mb-0">This is error text color.</h6>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Regular', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
        <v-col cols="12">
          <UiParentCard title="Font style">
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="text-body-large font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <v-breadcrumbs
              :items="['Size: 14px', 'Weight: Italic Regular & Italic Bold', 'Line Height: 22px']"
              class="text-headline-small text-lightText flex-wrap mb-0 pa-0"
            ></v-breadcrumbs>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
