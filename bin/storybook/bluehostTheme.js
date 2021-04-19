import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#BFCFDB',
  colorSecondary: '#3575D3',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  // barBg: '#BFCFDB',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Bluehost WordPress Plugin',
  brandUrl: 'https://github.com/bluehost/bluehost-wordpress-plugin',
  brandImage: 'https://www.bluehost.com/blog/wp-content/uploads/2018/03/cropped-bluehost.png',
});