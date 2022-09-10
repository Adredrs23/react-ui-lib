import { create } from '@storybook/theming'

const customTheme = create({
  base:'dark',
  brandTitle:'My Custom UI Lib',
  brandImage: "https://picsum.photos/30",
  appBg:"#000010",
  appContentBg: "#0E1117",
  barBg: "#1B2029"
})

export default customTheme