import { useState } from "react";
import MuscleIcon from "./MuscleIcon";

export default function ExerciseCard({ item }) {
  const [open, setOpen] = useState(false);
  const { exercise, sets, reps, explanation } = item;

  return (
    <div className="exercise-card">
      <div className="exercise-top">
        <div className="exercise-icon-name">
          <MuscleIcon muscleGroup={exercise.muscle_group} />
          <div>
            <h3 className="exercise-name">{exercise.name}</h3>
            <span className="exercise-muscle-tag">{exercise.muscle_group}</span>
          </div>
        </div>
        <span className="exercise-meta">{sets} sets × {reps} reps</span>
      </div>

      <button
        className={`why-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Why this exercise?
        <span className="icon">▾</span>
      </button>

      {open && (
        <div className="explanation-panel">
          {explanation || "No explanation available for this exercise."}
        </div>
      )}
    </div>
  );
}
