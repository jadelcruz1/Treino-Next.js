import Head from 'next/head' // lembrar semprede importar o Head
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from 'next/image'



export default function Home() {
  return (
   <>
   
      <Head> {/* lembrar semprede importar o Head*/}

          <title> Página Principal  </title>
          <meta name="keywords" content="Roupas, Calçados, Boné "></meta>
          <meta
            name="descripition"
            content='Encontre a melhor roupa para você'          
          
          ></meta>

      </Head>

      <div>

      <h1 className={styles.title}> Página Home </h1>
      <Image // a tag Image deve ser usada juntamente com a importação, import image from 'next/image'

        src="/images/city.jpg" 
        width="400px"
        height="400px" 
        alt="Cidade a noite"
        />

      </div>
           
   </> 
        
  )
}

/*
 A tag Head é um componente do próprio Next. Não precisa ser criada um componente para ela.

*/