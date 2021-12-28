/* Arquivo para criar paginas e rotas dinâmicas.
   excelente opção para quando não sabemos quantas páginas teremos que criar.
   lembrar sempre de colocar no nome do arquivo de [...Id].js.
   Sempre terá de ter [] com Id junto com o o nome do arquivo.
   exemplo: [todoId].js


 <p>comentario : la la la  <Link href={``}><a> Detalhes </a></Link></p> 
        feito para criar rotas dinâmicas a partid de rotas dinâmicas.


*/


import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Todo () {

    const router = useRouter()

    const todoId = router.query.todoId // esse todoId será o número que esta no final da url

    return ( 
        <>
            <Link href="/">
                <a> Voltar </a>
            </Link>   

            <h1> Exibindo o todo: {todoId} </h1> 

            <p>comentario : 1 1 1  <Link href={`/todos/${todoId}/comments/1`}>
                <a> Detalhes </a></Link></p> 
        

                <p>comentario : 2 2 2  <Link href={`/todos/${todoId}/comments/2`}>
                <a> Detalhes </a></Link></p> 
        
                <p>comentario : 3 3 3  <Link href={`/todos/${todoId}/comments/3`}>
                <a> Detalhes </a></Link></p> 

                <p>comentario : 4 4 4 <Link href={`/todos/${todoId}/comments/4`}>
                <a> Detalhes </a></Link></p> 
        
        
        
        
        
        </>

    )
}