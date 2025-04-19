import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CardCumt from '../../Components/CardC/CardC';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginaInicio = () => {

    
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    const fetchDataAllCharacter = async() => {
      try {

          let allCharacters = [];
          let nextPage = 'https://dragonball-api.com/api/characters';

          while (nextPage) {
              const response = await fetch(nextPage);
              const json = await response.json();
              
              // Filtra por género y agrega a la lista
              const filteredCharacters = json.items;
              allCharacters = [...allCharacters, ...filteredCharacters];
              
              nextPage = json.links.next; // URL de la siguiente página
            }
            
            setData(allCharacters);

      } catch (error) {
          console.error('Error fetching data:', error);
      }

    };

    fetchDataAllCharacter();

  }, []);

  return (
    <>
    
      <main>
          {
              data.map((item) => (
              <Link to={`/details/${item.id}`} key={item.id} >
                <CardCumt 
                  key={item.id}
                  user={item}
                />
              </Link>
              ))
          }
      </main>
    
      
    </>

    
    
    
  )
}

export default PaginaInicio