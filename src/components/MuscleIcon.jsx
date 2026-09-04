// Minimal single-stroke icons, one per muscle group in the exercise catalogue.
// Kept intentionally simple (geometric, not illustrative) to match the
// utility/data feel of the rest of the interface.

const ICONS = {
  legs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 3v8l-2 10h3l1.5-7 1.5 7h3l-2-10V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 8c0-3 2-5 4-5 1.2 0 2 .8 2 .8s.8-.8 2-.8c2 0 4 2 4 5-2 2-4 3-6 3s-4-1-6-3z" strokeLinejoin="round" />
      <path d="M6 8v10M18 8v10" strokeLinecap="round" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18M12 6l-6 4 6 3 6-3-6-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shoulders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="8" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M8.3 9.5C9.5 11 10.6 12 12 12s2.5-1 3.7-2.5" strokeLinecap="round" />
      <path d="M12 12v8" strokeLinecap="round" />
    </svg>
  ),
  hamstrings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3c0 5-1 7-3 9M16 3c0 5 1 7 3 9" strokeLinecap="round" />
      <path d="M5 12v9M19 12v9" strokeLinecap="round" />
    </svg>
  ),
  arms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 6l4 4-2 8M19 6l-4 4 2 8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="10" r="2.2" />
    </svg>
  ),
  core: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="4" width="10" height="4" rx="1" />
      <rect x="7" y="10" width="10" height="4" rx="1" />
      <rect x="7" y="16" width="10" height="4" rx="1" />
    </svg>
  ),
};

const FALLBACK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export default function MuscleIcon({ muscleGroup }) {
  return (
    <span className="muscle-icon" aria-hidden="true">
      {ICONS[muscleGroup] || FALLBACK_ICON}
    </span>
  );
}
