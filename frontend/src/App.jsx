import { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProgrammeView from "./components/ProgrammeView";
import { createUser, createProfile, generateProgramme } from "./api";

const STEPS = {
  FORM: "form",
  LOADING: "loading",
  RESULT: "result",
  ERROR: "error",
};

function StepIndicator({ currentStep }) {
  const step2Active = currentStep === STEPS.RESULT;
  return (
    <div className="step-indicator">
      <span className={`step-dot ${step2Active ? "done" : "active"}`}>
        {step2Active ? "✓" : "1"}
      </span>
      <span className={`step-line ${step2Active ? "done" : ""}`} />
      <span className={`step-dot ${step2Active ? "active" : ""}`}>2</span>
      <span className="step-text">
        {step2Active ? "Your session" : "Build your profile"}
      </span>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(STEPS.FORM);
  const [programme, setProgramme] = useState(null);
  const [error, setError] = useState(null);

  async function handleGenerate({ email, heightCm, weightKg, goal, experienceLevel, equipment, targetMuscleGroup }) {
    setStep(STEPS.LOADING);
    setError(null);
    try {
      // A random password satisfies the backend's user model; this demo
      // has no login flow, only profile-based generation.
      const password = crypto.randomUUID();
      const user = await createUser(email, password);
      await createProfile(user.id, {
        goal,
        experience_level: experienceLevel,
        equipment,
        height_cm: heightCm,
        weight_kg: weightKg,
      });
      const result = await generateProgramme(user.id, "My Programme", targetMuscleGroup);
      setProgramme(result);
      setStep(STEPS.RESULT);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStep(STEPS.ERROR);
    }
  }

  function handleReset() {
    setProgramme(null);
    setError(null);
    setStep(STEPS.FORM);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="app-eyebrow">Explainable AI · Strength Training</p>
        <h1 className="app-title">Your session,<br />with its reasoning.</h1>
        <p className="app-subtitle">
          Pick a muscle group to train today. Every recommendation comes with
          an explanation you can open or skip — built to test whether seeing
          the &ldquo;why&rdquo; changes how much you trust the plan.
        </p>
      </header>

      <StepIndicator currentStep={step} />

      {step === STEPS.ERROR && (
        <div className="status-error">{error}</div>
      )}

      {(step === STEPS.FORM || step === STEPS.LOADING || step === STEPS.ERROR) && (
        <ProfileForm onSubmit={handleGenerate} loading={step === STEPS.LOADING} />
      )}

      {step === STEPS.RESULT && (
        <ProgrammeView programme={programme} onReset={handleReset} />
      )}
    </div>
  );
}
