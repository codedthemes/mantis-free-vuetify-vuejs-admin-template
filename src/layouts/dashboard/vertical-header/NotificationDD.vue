<script setup lang="ts">
// icons
import { CheckCircleOutlined, GiftOutlined, MessageOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- notifications DD -->
  <!-- ---------------------------------------------- -->
  <v-menu :close-on-content-click="false" offset="6, 0">
    <template v-slot:activator="{ props }">
      <v-btn icon class="text-secondary ms-sm-2 ms-1" color="darkText" rounded="sm" size="small" v-bind="props">
        <v-badge :content="2" color="primary" offset-x="-4" offset-y="-5">
          <BellOutlined :style="{ fontSize: '16px' }" />
        </v-badge>
      </v-btn>
    </template>
    <v-sheet rounded="md" width="387" class="notification-dropdown">
      <div class="pa-4">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-body-large mb-0">Notifications</h6>
          <v-btn variant="text" color="success" icon rounded size="small">
            <CheckCircleOutlined :style="{ fontSize: '16px' }" />
            <v-tooltip aria-label="tooltip" activator="parent" location="bottom" content-class="custom-tooltip">
              <span class="text-label-small">Mark as all read</span>
            </v-tooltip>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
      <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 265px">
        <v-list class="py-0" lines="two" aria-label="notification list" aria-busy="true">
          <v-list-item value="1" color="secondary" class="no-spacer py-1" active>
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lightsuccess" class="me-3 py-2 text-success">
                <GiftOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-body-large font-weight-regular mb-0">
                It's
                <span style="font-weight: 600">Cristina danny's</span> birthday today.
              </h6>
              <span class="text-label-small">3:00 AM</span>
            </div>

            <p class="text-label-small text-medium-emphasis my-0">2 min ago</p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="2" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lightprimary" class="me-3 py-2 text-primary">
                <MessageOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-body-large font-weight-regular mb-0"><span style="font-weight: 600">Aida Burg</span> commented your post.</h6>
              <span class="text-label-small">6:00 PM</span>
            </div>

            <p class="text-label-small text-medium-emphasis my-0">5 August</p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="3" color="secondary" class="no-spacer" active>
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lighterror" class="me-3 py-2 text-error">
                <SettingOutlined />
              </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-body-large font-weight-regular mb-0">
                Your Profile is Complete
                <span style="font-weight: 600">60%</span>
              </h6>
              <span class="text-label-small">2:45 PM</span>
            </div>

            <p class="text-label-small text-medium-emphasis my-0">7 hours ago</p>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item value="4" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <v-avatar size="36" variant="flat" color="lightprimary" class="me-3 py-2 text-primary"> C </v-avatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-body-large font-weight-regular mb-0">
                <span style="font-weight: 600">Cristina Danny</span> invited to join <span style="font-weight: 600">Metting.</span>
              </h6>
              <span class="text-label-small">9:10 PM</span>
            </div>

            <p class="text-label-small text-medium-emphasis my-0">Daily scrum meeting time</p>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
      <v-divider></v-divider>
      <div class="pa-2 text-center">
        <v-btn color="primary" variant="text">View All</v-btn>
      </div>
    </v-sheet>
  </v-menu>
</template>

<style lang="scss">
.v-tooltip {
  > .v-overlay__content.custom-tooltip {
    padding: 2px 6px;
  }
}
</style>
