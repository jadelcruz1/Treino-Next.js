/* Arquivo para criação de páginas dinâmicas através de páginas dinamicas.
    obs1. não se pode esquecer de colocar ele dentro de uma outra pasta [todoId]
        para que o Next entenda a sequência de página.

        

*/

import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comment () {

    const router = useRouter()

    const todoId = router.query.todoId // esse todoId será o número que esta no final da url
    const commentId = router.query.commentId  // para acessar o número da página do comments



    return ( 
        <>
            <Link href={`/todos/${todoId}`}>
                <a> Voltar </a>
            </Link>   

            <h1> Exibindo o comentários número: {commentId} </h1> 
            
            <p> Do To {todoId}</p>
                  
        
        
        
        
        </>

    )
}