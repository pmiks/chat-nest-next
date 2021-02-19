import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../src/redux/reducers'
import { ThemeProvider} from 'styled-components'
import theme from '../src/theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  )
}

export default MyApp
