import type { Card } from '../types/card';

export const cards: Card[] = [
  {
    question: 'What does "typeof null" return in JavaScript?',
    answer: '"object" (a long-standing bug in the language).',
  },
  {
    question: 'What is the difference between "==" and "===" ?',
    answer: '"==" compares values with type coercion; "===" compares value and type without coercion.',
  },
  {
    question: 'What is a closure?',
    answer: 'A function bundled with references to its surrounding lexical scope, so it can access those variables after the outer function has returned.',
  },
  {
    question: 'What does "let" do that "var" does not?',
    answer: '"let" is block-scoped and cannot be redeclared in the same scope; "var" is function-scoped.',
  },
  {
    question: 'What does Array.prototype.map return?',
    answer: 'A new array with each element transformed by the callback. The original array is not changed.',
  },
  {
    question: 'What is a Promise?',
    answer: 'An object representing the eventual completion or failure of an asynchronous operation.',
  },
  {
    question: 'What does "async/await" do?',
    answer: 'It is syntax on top of Promises that lets asynchronous code be written and read like synchronous code.',
  },
  {
    question: 'What is the event loop?',
    answer: 'The mechanism that picks queued callbacks and runs them once the call stack is empty, so JavaScript can handle async work on a single thread.',
  },
];
