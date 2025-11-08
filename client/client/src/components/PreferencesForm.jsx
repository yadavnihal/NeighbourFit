import { useState } from "react";

function PreferencesForm({ onSubmit }) {
  const initialState = {
    amenities: 5,
    crimeRate: 5,
    commute: 5,
    costOfLiving: 5,
    employment: 5,
    housing: 5,
    health: 5,
    schools: 5,
  };

  const [preferences, setPreferences] = useState(initialState);

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Set Your Neighborhood Preferences</h3>
      {Object.keys(initialState).map((param) => (
        <div key={param} style={styles.inputGroup}>
          <label>{param.replace(/([A-Z])/g, " $1")}</label>
          <input
            type="number"
            min="1"
            max="10"
            name={param}
            value={preferences[param]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <button type="submit" style={styles.button}>Save Preferences</button>
    </form>
  );
}

const styles = {
  form: {
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "1rem auto"
  },
  inputGroup: {
    marginBottom: "0.8rem"
  },
  button: {
    padding: "0.6rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default PreferencesForm;
