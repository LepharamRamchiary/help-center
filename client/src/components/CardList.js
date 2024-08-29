import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import SearchBar from './SearchBar';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/cards');
      setCards(res.data.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='bg-slate-300 w-full h-40 flex items-center justify-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <Card key={card._id} title={card.title} description={card.description} />
          ))
        ) : (
          <p>No cards found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
