import { h } from 'vue';
import { type ThemeDefinition, createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons-vue';

const light: ThemeDefinition = {
  dark: false,
  variables: {
    'border-color': '#f0f0f0',
    'border-opacity': 1,
    'carousel-control-size': 10,
    gradient:
      'linear-gradient(250.38deg, rgba(var(--v-theme-primary), var(--v-shadow-opacity)) 2.39%, rgba(var(--v-theme-primary), var(--v-half-opacity)) 34.42%, rgb(var(--v-theme-primary)) 60.95%, rgba(var(--v-theme-darkprimary), var(--v-medium-opacity)) 84.83%, rgb(var(--v-theme-darkprimary)) 104.37%)',
    gradientRtl:
      'linear-gradient(250.38deg, rgb(var(--v-theme-darkprimary)) 2.39%, rgba(var(--v-theme-darkprimary), var(--v-medium-opacity)) 34.42%, rgb(var(--v-theme-primary)) 60.95%, rgba(var(--v-theme-primary), var(--v-half-opacity)) 84.83%, rgba(var(--v-theme-primary), var(--v-shadow-opacity)) 104.37%)',
    gradient2: 'linear-gradient(to right, rgb(var(--v-theme-darkprimary)), rgb(var(--v-theme-primary)))',
    'card-shadow': '0px 2px 8px rgba(0, 0, 0, 0.08)',
    'gradient-opacity': 0.2,
    'medium-opacity': 0.85,
    'chart-opacity': 0.6,
    'half-opacity': 0.5,
    'high-opacity': 1,
    'shadow-opacity': 0.08,
    'high-emphasis-opacity': 1,
    'list-item-subtitle-opacity': 1,
    'activated-opacity': 0.083,
    'custom-shadows-primary': '0 0 0 2px rgba(var(--v-theme-primary), 0.2)',
    'custom-shadows-secondary': '0 0 0 2px rgba(var(--v-theme-secondary), 0.2)',
    'custom-shadows-success': '0 0 0 2px rgba(var(--v-theme-success), 0.2)',
    'custom-shadows-info': '0 0 0 2px rgba(var(--v-theme-info), 0.2)',
    'custom-shadows-warning': '0 0 0 2px rgba(var(--v-theme-warning), 0.2)',
    'custom-shadows-error': '0 0 0 2px rgba(var(--v-theme-error), 0.2)',
    'shadow-1': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    'select-dropdown-shadow': '0 9px 28px 8px rgba(0, 0, 0, 0.05)'
  },
  colors: {
    primary: '#1677ff',
    secondary: '#8c8c8c',
    info: '#13c2c2',
    success: '#52c41a',
    accent: '#FFAB91',
    warning: '#faad14',
    error: '#ff4d4f',
    lightprimary: '#e6f4ff',
    lightsecondary: '#f5f5f5',
    lightsuccess: '#EAFCD4',
    lighterror: '#fff1f0',
    lightwarning: '#FFF6D0',
    lightinfo: '#e6fffb',
    darkText: '#262626',
    lightText: '#8c8c8c',
    darkprimary: '#0958d9',
    darksecondary: '#262626',
    darkinfo: '#006d75',
    darksuccess: '#237804',
    darkwarning: '#ad6800',
    darkerror: '#a8071a',
    borderLight: '#e6ebf1',
    inputBorder: '#a1a1a5',
    containerBg: '#fafafb',
    surface: '#fff',
    'on-surface': '#262626',
    'on-surface-variant': '#fff',
    'surface-light': '#fafafb',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#f5f5f5',
    gray200: '#d9d9d9',
    gray300: '#595959',
    gray400: '#f0f0f0',
    primary100: '#e6f4ff',
    primary200: '#a1d2ff',
    secondary200: '#eeeeee'
  }
};

export default createVuetify({
  display: {
    thresholds: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1440
    }
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light
    }
  },
  defaults: {
    VBtn: {
      variant: 'flat'
    },
    VBtnGroup: {
      VBtn: {
        color: 'darkText'
      }
    },
    VCard: {
      rounded: 'md'
    },
    VField: {
      baseColor: 'inputBorder',
      color: 'primary',
      rounded: 'md'
    },
    VAutoComplete: {
      color: 'primary'
    },
    VTextField: {
      rounded: 'md',
      variant: 'outlined',
      baseColor: 'inputBorder',
      clearIcon: h(CloseOutlined, {
        style: { fontSize: '14px' }
      })
    },
    VTextarea: {
      variant: 'outlined',
      color: 'primary'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    },
    VAvatar: {
      color: 'primary',
      variant: 'tonal',
      style: 'font-size: 16px; --v-activated-opacity: 0.0825',
      VIcon: {
        size: '16px'
      }
    },
    VBadge: {
      VIcon: {
        size: '20px'
      }
    },
    VProgressLinear: {
      height: 6,
      rounded: 'lg'
    },
    VSelect: {
      variant: 'outlined',
      clearIcon: h(CloseOutlined)
    },
    VList: {
      collapseIcon: h(DownOutlined, {
        style: { fontSize: '12px' }
      }),
      expandIcon: h(UpOutlined, {
        style: { fontSize: '12px' }
      }),
      VListItemSubtitle: {
        style: 'font-size: 0.75rem;line-height: 1.66'
      },
      VListItem: {
        VAvatar: {
          variant: 'tonal'
        }
      }
    }
  }
});
