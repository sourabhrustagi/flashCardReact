import { useState } from 'react';
import { cards } from './cards.js';
import FlashCard from './components/FlashCard.jsx';
import ProgressBar from './components/ProgressBar.jsx';

export default function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const total = cards.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Moving to another card always shows its question side first.
  const goTo = (next) => {
    setIndex(next);
    setFlipped(false);
  };

  return (
    <main className="app">
      <h1>Flash Cards</h1>

      <ProgressBar current={index + 1} total={total} />

      <FlashCard
        card={cards[index]}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
      />

      <nav className="controls">
        <button onClick={() => goTo(index - 1)} disabled={isFirst}>
          Previous
        </button>
        <button onClick={() => setFlipped((f) => !f)}>
          {flipped ? 'Show question' : 'Flip'}
        </button>
        <button onClick={() => goTo(index + 1)} disabled={isLast}>
          Next
        </button>
      </nav>
    </main>
  );
}
