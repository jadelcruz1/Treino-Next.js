/* Arquivo para criar paginas e rotas dinâmicas.
   excelente opção para quando não sabemos quantas páginas teremos que criar.
   lembrar sempre de colocar no nome do arquivo de [...Id].js.
   Sempre terá de ter [] com Id junto com o o nome do arquivo.
   exemplo: [todoId].js


 <p>comentario : la la la  <Link href={``}><a> Detalhes </a></Link></p> 
        feito para criar rotas dinâmicas a partid de rotas dinâmicas.


*/


import Link from 'next/link'



export async function getStaticProps(context) {

    const { params }  = context

    const data = await fetch ( 
        `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
        
        )
     const todo = await data.json()   

     return {
         props: { todo },
     }

 }

 

export async function getStaticPaths (){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json()

    const paths = data.map((todo)=> {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })


return {paths, fallback: false} /* se deixar o fallback como falso ele vai renderizar pelo back end,
 assim  se tiver elementos novos na Api teremos que rebuildar novamente pois esse novo elemento não estará mapeado (map)
   Caso esteja como "true" ele renderizar o novo item quando efetuar o onload da página, quando recarregara página,
    esse produto será recarregado.

*/
}



export default function Todo ({ todo }) {

    

    return ( 
        <>
            <Link href="/todos">
                <a> Voltar </a>
            </Link>   

            <h1> Exibindo o todo: {todo.id} </h1> 
            <h3>Texto: {todo.title} </h3>

            <p>comentario : 1 1 1  <Link href={`/todos/${todo.id}/comments/1`}>
                <a> Detalhes </a></Link></p> 
        

                <p>comentario : 2 2 2  <Link href={`/todos/${todo.id}/comments/2`}>
                <a> Detalhes </a></Link></p> 
        
                <p>comentario : 3 3 3  <Link href={`/todos/${todo.id}/comments/3`}>
                <a> Detalhes </a></Link></p> 

                <p>comentario : 4 4 4 <Link href={`/todos/${todo.id}/comments/4`}>
                <a> Detalhes </a></Link></p> 
        
              
        
        
        </>

    )
}