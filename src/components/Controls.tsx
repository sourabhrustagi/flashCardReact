interface ControlsProps {
  flipped: boolean;
  isFirst: boolean;
  isLast: boolean;
  onPrevious: () => void;
  onFlip: () => void;
  onNext: () => void;
}

export default function Controls({ flipped, isFirst, isLast, onPrevious, onFlip, onNext }: ControlsProps) {
  return (
    <nav className="controls">
      <button onClick={onPrevious} disabled={isFirst}>
        Previous
      </button>
      <button onClick={onFlip}>{flipped ? 'Show question' : 'Flip'}</button>
      <button onClick={onNext} disabled={isLast}>
        Next
      </button>
    </nav>
  );
}
