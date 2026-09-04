const BASE_URL = "http://127.0.0.1:8000";

async function handleResponse(res) {
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = body.detail || detail;
    } catch {
      // ignore parse errors, fall back to statusText
    }
    throw new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
  }
  return res.json();
}

export async function createUser(email, password) {
  const res = await fetch(`${BASE_URL}/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
}

export async function createProfile(userId, profile) {
  const res = await fetch(`${BASE_URL}/users/${userId}/profile/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  return handleResponse(res);
}

export async function generateProgramme(userId, name, targetMuscleGroup) {
  const res = await fetch(`${BASE_URL}/users/${userId}/programmes/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, target_muscle_group: targetMuscleGroup }),
  });
  return handleResponse(res);
}
