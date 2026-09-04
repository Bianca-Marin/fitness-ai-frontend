import { useState } from "react";

const GOALS = [
  { value: "strength", label: "Strength" },
  { value: "hypertrophy", label: "Hypertrophy (muscle size)" },
  { value: "endurance", label: "Endurance" },
  { value: "general_fitness", label: "General fitness" },
];

const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const EQUIPMENT_OPTIONS = [
  { value: "none", label: "Bodyweight only" },
  { value: "dumbbells", label: "Dumbbells" },
  { value: "barbell", label: "Barbell" },
  { value: "resistance_bands", label: "Resistance bands" },
  { value: "full_gym", label: "Full gym" },
];

const MUSCLE_GROUPS = [
  { value: "legs", label: "Legs" },
  { value: "glutes", label: "Glutes" },
  { value: "back", label: "Back" },
  { value: "chest", label: "Chest" },
  { value: "shoulders", label: "Shoulders" },
  { value: "hamstrings", label: "Hamstrings" },
  { value: "arms", label: "Arms" },
  { value: "core", label: "Core" },
];

export default function ProfileForm({ onSubmit, loading }) {
  const [email, setEmail] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [goal, setGoal] = useState("strength");
  const [experienceLevel, setExperienceLevel] = useState("beginner");
  const [equipment, setEquipment] = useState("dumbbells");
  const [targetMuscleGroup, setTargetMuscleGroup] = useState("glutes");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      email,
      heightCm: heightCm ? parseFloat(heightCm) : null,
      weightKg: weightKg ? parseFloat(weightKg) : null,
      goal,
      experienceLevel,
      equipment,
      targetMuscleGroup,
    });
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="section-label">Build your profile</h2>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="height">Height (cm) — optional</label>
          <input
            id="height"
            type="number"
            min="100" max="250"
            placeholder="170"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="weight">Weight (kg) — optional</label>
          <input
            id="weight"
            type="number"
            min="30" max="250"
            placeholder="65"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="goal">Training goal</label>
        <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
          {GOALS.map((g) => (
            <option key={g.value} value={g.value}>{g.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="experience">Experience level</label>
        <select
          id="experience"
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
        >
          {EXPERIENCE_LEVELS.map((l) => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="equipment">Available equipment</label>
        <select
          id="equipment"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        >
          {EQUIPMENT_OPTIONS.map((eq) => (
            <option key={eq.value} value={eq.value}>{eq.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="muscleGroup">What are you training today?</label>
        <select
          id="muscleGroup"
          value={targetMuscleGroup}
          onChange={(e) => setTargetMuscleGroup(e.target.value)}
        >
          {MUSCLE_GROUPS.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? "Generating your session..." : "Generate today's session"}
      </button>
    </form>
  );
}
