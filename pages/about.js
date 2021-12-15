import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About(){
    return (
        <>

            <Navbar />
            <h1> Página de About! </h1>

            <Link href="/">
                <a> Retornar </a>
            </Link>
            
        </>
    
    
    
    )

}

// OS ARQUIVOS NEXT VÃO GERAR O ROTEAMENTO;
// Com base no nome do arquivo, há a geração de URL's do projeto.
// O arquivo index.js sinaliza a criação da rota base.
//por exemplo : https://www.localhost:3000/about = index.js
// este arquivo  deve está fora da pasta ./pages/api.
//deve pertencer a pasta pages.

