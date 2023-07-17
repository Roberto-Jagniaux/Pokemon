import Pokemon from '../src/componentes/Card';
import React, { useState } from 'react';


function App() {
  const cardsData = [
    {id: 1,url: 'https://pokeapi.co/api/v2/pokemon/15',
    },
    {id: 2,url: 'https://pokeapi.co/api/v2/pokemon/4',
    },
    {id: 3,url: 'https://pokeapi.co/api/v2/pokemon/6',
    },
    {id: 4,url: 'https://pokeapi.co/api/v2/pokemon/8',
    },
    {id: 5,url: 'https://pokeapi.co/api/v2/pokemon/10',
    },
    {id: 6,url: 'https://pokeapi.co/api/v2/pokemon/12',
    },
    {id: 7,url: 'https://pokeapi.co/api/v2/pokemon/14',
    },
    {id: 8,url: 'https://pokeapi.co/api/v2/pokemon/16',
    },
    {id: 9,url: 'https://pokeapi.co/api/v2/pokemon/18',
    },
    {id: 10,url: 'https://pokeapi.co/api/v2/pokemon/20',
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="App">
      <Pokemon key={cardsData[currentCardIndex].id} url={cardsData[currentCardIndex].url} />
      <button className='boton izq' onClick={goToPreviousCard}>&#8249;</button>
      <button className='boton der' onClick={goToNextCard}>&#8250;</button>
    </div>
  ); 
}

export default App;
