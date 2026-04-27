import '../src/styles/token.css'
import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

const preview: Preview = {
  decorators: [
    (Story) => {
      const isDark = useDarkMode()

      useEffect(() => {
        if (isDark) {
          document.body.classList.add('dark')
        } else {
          document.body.classList.remove('dark')
        }
      }, [isDark])

      return Story()
    },
  ],
  parameters: {
    darkMode: {
      dark: { class: 'dark' },
      light: { class: '' },
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview