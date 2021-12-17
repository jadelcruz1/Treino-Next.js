import Navbar from './Navbar'
import Footer from './Footer'


export default function MainContainer({ children }){
    return(
        <>
        <Navbar />
        
        <div> { children } </div>

        <Footer />
        
        
        </>

    )
}

/* Criação do componente Layout  para integrar as outras paginas de maneira automatica.
não se pode esquecer de colocar a propriedade { children }, pois ela entende que algum conteúdo irá
no meio do componente.
*/