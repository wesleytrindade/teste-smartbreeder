import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { apollo } from './config/apollo.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './theme.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>

  </StrictMode>,
)
