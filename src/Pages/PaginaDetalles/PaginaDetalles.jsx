import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import CardCusmDetail from '../../Components/CardCusmDetail/CardCusmDetail';


const PaginaDetalles = () => {

    const [data, setData] = useState({});

    let {id} = useParams()

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters/'+id)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error('Error fetching data:', error));    
      },[]);

  return (


    <main style={{  justifyContent: 'center',alignItems: 'center'}}>
        <CardCusmDetail 
            key={data.id}
            user={data}
        />

       

    </main>
    
  )
}

export default PaginaDetalles