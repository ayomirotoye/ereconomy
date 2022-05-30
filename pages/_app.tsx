import "../styles/css/svgStyles.css";
import "../styles/css/tableUtilities.css";
import { GlobalStyles, myThemes } from '../styles/themes/theme.config'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/css/index.scss';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import store from "../state/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myThemes}>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
        />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
