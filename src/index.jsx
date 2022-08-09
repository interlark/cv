import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import theme from './theme'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
)
