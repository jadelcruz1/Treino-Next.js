import Link from 'next/link'
import React, { useState } from 'react';
//import getApiClient from '../../app/services/axios';


export default function Documents ( { api }) {

  const [cnh, setCnh] = useState ('');

  const uploadCnh = async e => {
    e.preventDefault();
    console.log('upload Cnh');
    console.log(cnh);
  }

  const [comprovante, setComprovante] = useState ('');

  const uploadComprovante = async e => {
    e.preventDefault();
    console.log('upload comprovante');
    console.log(comprovante);
  }

  const [rg, setRg] = useState ('');

  const uploadRg = async e => {
    e.preventDefault();
    console.log('upload Rg');
    console.log(rg);
  }



  return (

      <> 
          <h1> Documentos solicitados  </h1>

          <form onSubmit={uploadCnh}>
            <label> CNH </label>
            <input type="file" name="cnh" onChange={e => setCnh(e.target.files[0])}/> <br /><br />

            <button type="submit" >Salvar</button>
          </form>

          <form onSubmit={uploadComprovante}>
            <label> Comprovante de endereço </label>
            <input type="file" name="comprovante" onChange={e => setComprovante(e.target.files[0])}/> <br /><br />

            <button type="submit" >Salvar</button>
          </form>

          <form onSubmit={uploadRg}>
            <label> Registro Geral </label>
            <input type="file" name="rg" onChange={e => setRg(e.target.files[0])}/> <br /><br />

            <button type="submit" >Salvar</button>
          </form>


               
      
      </>
  )
}

