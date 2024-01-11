// import { useEffect, useState } from 'react';
import './css/Body.css'
import Characters from './Characters';
import { useQuery } from 'react-query';

async function fetchData(){
  let data = await fetch("https://rickandmortyapi.com/api/character")
  .then((response)=>response.json())
  return data.results;
}

function Body() {
  const {data, isLoading, isError} = useQuery('characters', fetchData);
  console.log(data);

  if(isLoading) return <h1>loading</h1>
  if(isError) return <h1>Error</h1>
  if(!data) return <h1>Data</h1>
  return (
    <>
      <main className='main'>
        <Characters data={data}/>
      </main>
    </>
    )
  
}

export default Body
