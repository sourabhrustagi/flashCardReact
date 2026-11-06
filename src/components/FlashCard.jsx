export default function FlashCard({ card, flipped, onFlip }) {
  return (
    <button
      type="button"
      className={`flash-card ${flipped ? 'is-flipped' : ''}`}
      onClick={onFlip}
      aria-label={flipped ? 'Showing answer, click to show question' : 'Showing question, click to reveal answer'}
    >
      <div className="flash-card-inner">
        <div className="flash-card-face flash-card-front">
          <span className="flash-card-label">Question</span>
          <p>{card.question}</p>
        </div>
        <div className="flash-card-face flash-card-back">
          <span className="flash-card-label">Answer</span>
          <p>{card.answer}</p>
        </div>
      </div>
    </button>
  );
}
