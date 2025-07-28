import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Home = () => {
  const  [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    async function bringApi() {
      try {
        const apiListpure = await fetch('https://fakestoreapi.com/products');
        const apiListJson = await apiListpure.json();
        setListProduct(apiListJson)
      }catch(error){
        console.error('Erro ao buscar api'+ error);
      }

    }
    bringApi();
  }, [])
  return (
    <section className='w-full h-full  bg-blue-900 text-white flex flex-col items-center p-6'>
      <h2 className='text-2xl py-4 font-bold'>Catálogo LumiStore</h2>
      <ul className='grid max-w-7xl w-full  justify-center sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {listProduct.map(card =>(
          <Card key={card.id} id={card.id} image={card.image} title={card.title} price={card.price} category={card.category} description={card.description} />
        ))}
      </ul>
    </section>
  )
}

export default Home