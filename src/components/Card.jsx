import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <li className='w-full h-[450px] border-2 border-red-500 rounded-2xl p-8 bg-blue-500'>
            <div className='h-2/4 px-6 items-center justify-center flex mb-5'>
                <img className='h-full' src={props.image} alt="imagem do produto" />
            </div>
            <div className='h-full'>
                <Link to={`/product/${props.id}`}>

                    <h2>{props.title}</h2>
                    <p>Valor: {props.price}</p>
                    <p>Categoria: {props.category}</p>
                    <p className='truncate'>{props.description}</p>
                </Link>
                <div className='flex justify-between text-center mt-3.5'>
                    <button className='border-white border-2 px-4 rounded-2xl'>Adicionar ao carrinho</button>
                    <button className='border-white border-2 px-4 rounded-2xl'>Comprar</button>
                </div>
            </div>




        </li>
    )
}

export default Card