import Link from 'next/link'

export default function Products(){
    return (
        <>
            <h1> Teste de renderização</h1>

            <p> teste de fragment em Next.js</p>

            <Link href="/">
            <a> Retornar </a>
            
            </Link>

        </>
    )
}

/* mesma regra do React.js quando tiver mais de uma linha no render, criar uma div ou fragment.
nome da função sempre a primeira letra maíuscula, porém o arquivo em minusculo.
para acessar a pagina na web usar o nome do arquivo(letra minuscula), não da function (letra maíuscula)

para navegar entre paginas no Next.js utiliza-se a tag Link e não pode esquecer de importar 
import Link from 'next/link'





*/