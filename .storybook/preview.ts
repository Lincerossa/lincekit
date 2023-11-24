import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/themes'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
]

export default preview
