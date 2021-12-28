/*
Página criada para fazer teste com consumo de api via getStaticProps .
usas- se fetch para buscar os dados da Api.
Api usada foi do site https://jsonplaceholder.typicode.com/todos

*/



import styles from '../styles/Todos.module.css'




export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    //console.log (todos)

    return {
        props: { todos }, 
    }
}


export default function Todos ({ todos }) {

    return (
        <> 
            <h1> Tarefas para Fazer </h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                <li key={todo.id}>
                     
                    {todo.title}

                </li>               
                
                 ))}


            </ul>
        
        
        
        </>
    )
}

