/*
Página criada para fazer teste com consumo de api via getStaticProps .
usas- se fetch para buscar os dados da Api.
Api usada foi do site https://jsonplaceholder.typicode.com/users
Teste para consumir mais dados da Api

*/



import styles from '../styles/Todos.module.css'




export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    
   
    const users = await data.json()

    const address = ["street", "suite", "city", "zipcode" ];
    //console.log (todos)

    return {
        props: { users, address }, 
    }
}


export default function Users ({ users, address }) {

    return (
        <> 
            <h1> Lista de Usuários </h1>
            <ul className={styles.todolist}>
                {users.map((users) => (
                <li key={users.id}>
                     
                   <h1> {users.username}  </h1> 

                   <p>  {users.name}  </p>

                   <p>  {users.email}  </p>

                   <p>

                   {address.map((address) => (
                        <li>{address}</li>
                    ))}
                   </p>

                </li>               
                
                 ))}


            </ul>
        
        
        
        </>
    )
}

