import { ref } from 'vue';
import { defineStore } from 'pinia';
import config from '@/config';

export const useCustomizerStore = defineStore('customizer', () => {
  const Sidebar_drawer = ref(config.Sidebar_drawer);
  const mini_sidebar = ref(config.mini_sidebar);
  const actTheme = ref(config.actTheme);
  const fontTheme = ref(config.fontTheme);

  function SET_SIDEBAR_DRAWER() {
    Sidebar_drawer.value = !Sidebar_drawer.value;
  }

  function SET_MINI_SIDEBAR(payload: boolean) {
    mini_sidebar.value = payload;
  }

  function SET_THEME(payload: string) {
    actTheme.value = payload;
  }

  function SET_FONT(payload: string) {
    fontTheme.value = payload;
  }

  return {
    Sidebar_drawer,
    mini_sidebar,
    actTheme,
    fontTheme,
    SET_THEME,
    SET_SIDEBAR_DRAWER,
    SET_MINI_SIDEBAR,
    SET_FONT
  };
});
