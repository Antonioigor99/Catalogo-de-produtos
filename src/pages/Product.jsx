import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
  const {id} = useParams();
  const [productApi, setProductApi] = useState('');
  useEffect(()=>{
    async function getProductApi() {
      try{
        const productApi = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productApiJson = await productApi.json();
        setProductApi(productApiJson);
      }catch(error){
        console.error('Erro ao buscar Api' + error);
      }
    }
    getProductApi()
  },[id])
  console.log(productApi)
  return (
    <div> 
      <img src={productApi.image} />
      <p>{productApi.title}</p>
      <p>Valor R${productApi.price}</p>
      <p>{productApi.category}</p>
      <p>{productApi.description}</p>
      <Link to={'/'}>VOLTAR</Link>
    </div>
  )
}

export default Product