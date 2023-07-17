import React , { useEffect, useState } from 'react';
import '../css/estilos.css'

function Pokemon(props){

    const [pokemon,setPokemon]=useState({});
    const [isLoading,setIsLoading]=useState(true);


    const fethApi=async()=>{
        const response = await fetch(props.url)
        const json = await response.json()
        setPokemon({
            name: json.name,
            type: json.types[0].type.name,
            imageUrl: json.sprites.front_default,
          });

    }

    useEffect(()=>{
        (async()=>{
            await fethApi()
            setIsLoading(false)
        })()

    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(

<div className='contenedorCarta'>
    <img className='contenedorImagen' src={pokemon.imageUrl} alt='imagen'/>
    <h5 className='contenedorTitulo'>{pokemon.name}</h5>
    <p className='contenedorParrafo'>{pokemon.type}</p>
</div>

);
}

export default Pokemon;