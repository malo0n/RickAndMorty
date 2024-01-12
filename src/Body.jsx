// import { useEffect, useState } from 'react';
import './css/Body.css'
import Characters from './Characters';
import { useQuery } from 'react-query';
import {fetchData} from './queries';


function Body() {

  const {data, isLoading, isError} = useQuery('characters', fetchData);

  if(isLoading) return <h1>loading</h1>
  if(isError) return <h1>Error</h1>
  if(!data) return <h1>Data</h1>
return (
    <main className='main'>
        <Characters data={data}/>
    </main>
  )


}

export default Body
