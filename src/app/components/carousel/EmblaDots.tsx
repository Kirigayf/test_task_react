'use client';

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const DotButton = ({ selected, onClick }: DotButtonProps) => (
  <button
    className={`embla__dot ${selected ? 'embla__dot--selected' : ''}`}
    type="button"
    onClick={onClick}
  />
);