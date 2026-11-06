import { useFlashcards } from './hooks/useFlashcards';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import Controls from './components/Controls';

export default function App() {
  const { card, index, total, flipped, isFirst, isLast, next, previous, flip } = useFlashcards();

  return (
    <main className="app">
      <h1>Flash Cards</h1>

      <ProgressBar current={index + 1} total={total} />

      <FlashCard card={card} flipped={flipped} onFlip={flip} />

      <Controls
        flipped={flipped}
        isFirst={isFirst}
        isLast={isLast}
        onPrevious={previous}
        onFlip={flip}
        onNext={next}
      />
    </main>
  );
}
