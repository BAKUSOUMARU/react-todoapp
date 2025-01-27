import React, { useState, useEffect } from 'react';
import './App.css';

interface Card {
  id: number;
  value: string;
  matched: boolean;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [disabled, setDisabled] = useState(false);

  const initialValues = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒'];

  useEffect(() => {
    const shuffledCards = [...initialValues, ...initialValues]
      .map((value, index) => ({ id: index, value, matched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card: Card) => {
    if (disabled || card.matched || selectedCards.includes(card)) return;
    setSelectedCards((prev) => [...prev, card]);

    if (selectedCards.length === 1) {
      setDisabled(true);
      const [firstCard] = selectedCards;
      if (firstCard.value === card.value) {
        setCards((prev) =>
          prev.map((c) =>
            c.value === card.value ? { ...c, matched: true } : c
          )
        );
        setSelectedCards([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCards.includes(card) || card.matched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="front">{card.value}</div>
            <div className="back">?</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
