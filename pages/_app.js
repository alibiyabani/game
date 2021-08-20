
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from "@material-ui/core/styles"
import Layout from '../components/layout'

import '../styles/globals.css';



function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: 14,
    palette: {
      type: "dark",
      primary: {
        main: "#262626 !important"
      },
      secondary: {
        main: "#e5e5e5"
      },
      background: {
        default: "#121212 !important"
      },
      text: {
        primary: "#808080",
        secondary: "#e5e5e5",
      },
    },
    root: {
      color: "#FFFFFF"
    }

  })


  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
