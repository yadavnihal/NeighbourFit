import { useState } from "react";

function MatchForm() {
  const [safety, setSafety] = useState(5);
  const [affordability, setAffordability] = useState(5);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ safety, affordability })
    });

    const data = await response.json();
    setResults(data);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Find Your Ideal Neighborhood</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Safety (1-10)
          <input
            type="number"
            value={safety}
            min="1"
            max="10"
            onChange={(e) => setSafety(Number(e.target.value))}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Affordability (1-10)
          <input
            type="number"
            value={affordability}
            min="1"
            max="10"
            onChange={(e) => setAffordability(Number(e.target.value))}
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>Find Matches</button>
      </form>

      {results.length > 0 && (
        <div style={styles.results}>
          <h3 style={styles.resultsTitle}>Top Matches</h3>
          <ul style={styles.list}>
            {results.map((n) => (
              <li key={n.name} style={styles.listItem}>
                <strong>{n.name}</strong> — Score: {n.score}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "3rem auto",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontFamily: "Arial, sans-serif",
    textAlign: "center"
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#333"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1rem",
    color: "#333",
    textAlign: "left"
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "0.5rem"
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  results: {
    marginTop: "2rem",
    textAlign: "left"
  },
  resultsTitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  listItem: {
    padding: "0.75rem",
    borderBottom: "1px solid #ddd"
  }
};

export default MatchForm;
