import ExerciseCard from "./ExerciseCard";

const MUSCLE_GROUP_LABELS = {
  legs: "Legs", glutes: "Glutes", back: "Back", chest: "Chest",
  shoulders: "Shoulders", hamstrings: "Hamstrings", arms: "Arms", core: "Core",
};

export default function ProgrammeView({ programme, onReset }) {
  if (!programme) return null;

  const exercises = programme.exercises;
  const totalSets = exercises.reduce((sum, e) => sum + e.sets, 0);
  const totalReps = exercises.reduce((sum, e) => sum + e.sets * e.reps, 0);
  const focusLabel = MUSCLE_GROUP_LABELS[programme.target_muscle_group] || programme.target_muscle_group || "—";

  return (
    <div className="card">
      <h2 className="section-label">{focusLabel} Day</h2>
      <div className="programme-meta">
        <span>{exercises.length} exercises</span>
        <span>Generated {new Date(programme.created_at).toLocaleString()}</span>
      </div>

      {exercises.length > 0 && (
        <div className="stats-bar">
          <div className="stat-cell">
            <span className="stat-value">{totalSets}</span>
            <span className="stat-label">Total sets</span>
          </div>
          <div className="stat-cell">
            <span className="stat-value">{totalReps}</span>
            <span className="stat-label">Total reps</span>
          </div>
          <div className="stat-cell">
            <span className="stat-value" style={{ fontSize: 20 }}>{focusLabel}</span>
            <span className="stat-label">Focus</span>
          </div>
        </div>
      )}

      {exercises.length === 0 ? (
        <div className="empty-state">
          <div className="icon">∅</div>
          <p>No {focusLabel.toLowerCase()} exercises matched your profile. Try different equipment or experience level.</p>
        </div>
      ) : (
        <div className="exercise-list">
          {exercises
            .slice()
            .sort((a, b) => a.order_index - b.order_index)
            .map((item) => (
              <ExerciseCard key={item.id} item={item} />
            ))}
        </div>
      )}

      <button className="btn-secondary" style={{ marginTop: 20 }} onClick={onReset}>
        Train another muscle group
      </button>
    </div>
  );
}
