import type { Preview } from '@storybook/react';
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode);
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    theme: isDarkMode ? 'dark' : 'light',
  },
};

export default preview;
