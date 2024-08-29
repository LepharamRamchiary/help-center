import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const CardList = () => {
  const [cards, setCards] = useState([]);

  // Fetch all cards from the backend when the component loads
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/cards');
      // console.log(response);
      
      setCards(res.data.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  return (
    <div className="p-4 md:p-0 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-2xl mx-auto ">
      {cards.map(card => (
        <Card key={card._id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
