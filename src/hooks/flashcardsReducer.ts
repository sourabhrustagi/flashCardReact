import { cards } from '../data/cards';

export interface FlashcardsState {
  index: number;
  flipped: boolean;
}

export type FlashcardsAction = { type: 'next' } | { type: 'previous' } | { type: 'flip' };

export const initialFlashcardsState: FlashcardsState = { index: 0, flipped: false };

// Pure: same state and action always give the same result, so it is easy to test.
export function flashcardsReducer(state: FlashcardsState, action: FlashcardsAction): FlashcardsState {
  const last = cards.length - 1;

  switch (action.type) {
    case 'next':
      if (state.index >= last) return state;
      // Moving to another card always shows its question side first.
      return { index: state.index + 1, flipped: false };
    case 'previous':
      if (state.index <= 0) return state;
      return { index: state.index - 1, flipped: false };
    case 'flip':
      return { ...state, flipped: !state.flipped };
  }
}
