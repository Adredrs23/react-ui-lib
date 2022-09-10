import { addParameters } from "@storybook/react"
import customTheme from "./customTheme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addParameters({
  options: {
    theme: customTheme,
  }
})