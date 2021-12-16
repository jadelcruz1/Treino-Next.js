import '../styles/globals.css'
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return( 
  <MainContainer>  
     <Component {...pageProps} />
  </MainContainer>
  )
}

export default MyApp


// nesta pagina que funciona todo o "sistema next"
//aprender a usar ela
// preciso aprender a criar api com next para usar no projeto crypto
