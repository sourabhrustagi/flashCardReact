import { useState } from 'react';
import { cards } from '../data/cards';
import type { Card } from '../types/card';

export interface FlashcardsState {
  card: Card;
  index: number;
  total: number;
  flipped: boolean;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  previous: () => void;
  flip: () => void;
}

// Owns all card navigation state. Components only read values and call actions.
export function useFlashcards(): FlashcardsState {
  const [index, setIndex] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);

  const total = cards.length;

  // Moving to another card always shows its question side first.
  const goTo = (next: number): void => {
    setIndex(next);
    setFlipped(false);
  };

  return {
    card: cards[index],
    index,
    total,
    flipped,
    isFirst: index === 0,
    isLast: index === total - 1,
    next: () => goTo(index + 1),
    previous: () => goTo(index - 1),
    flip: () => setFlipped((f) => !f),
  };
}
