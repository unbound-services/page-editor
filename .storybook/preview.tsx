import { Preview } from '@storybook/react'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs:{
      toc:true,

    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;