import { useReducer } from 'react';
import { cards } from '../data/cards';
import type { Card } from '../types/card';
import { flashcardsReducer, initialFlashcardsState } from './flashcardsReducer';

export interface FlashcardsView {
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

// Components read values and call actions. All transitions live in flashcardsReducer.
export function useFlashcards(): FlashcardsView {
  const [state, dispatch] = useReducer(flashcardsReducer, initialFlashcardsState);
  const total = cards.length;

  return {
    card: cards[state.index],
    index: state.index,
    total,
    flipped: state.flipped,
    isFirst: state.index === 0,
    isLast: state.index === total - 1,
    next: () => dispatch({ type: 'next' }),
    previous: () => dispatch({ type: 'previous' }),
    flip: () => dispatch({ type: 'flip' }),
  };
}
