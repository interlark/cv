import '@fontsource/open-sans/latin-400.css'
import '@fontsource/open-sans/latin-400-italic.css'
import '@fontsource/open-sans/latin-600.css'
import '@fontsource/open-sans/cyrillic-400.css'
import '@fontsource/open-sans/cyrillic-400-italic.css'
import '@fontsource/open-sans/cyrillic-600.css'

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#edeef0', 'gray.800')(props),
      transitionProperty: 'background-color opacity',
      transitionDuration: 'normal',
      minWidth: '280px'
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const fonts = {
  body: `'Open Sans', sans-serif`,
  heading: `'Open Sans', sans-serif`
}

const theme = extendTheme({ config, styles, fonts })
export default theme
