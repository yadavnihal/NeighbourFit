import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PreferencesForm from "../components/PreferencesForm";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:5000/api/users/${id}`);
      const data = await res.json();
      setUser(data.user);

      if (!data.user.preferences) {
        setShowForm(true);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
  const fetchRecommendations = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}/recommendations`);
      const data = await res.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  if (id) {
    fetchRecommendations();
  }
}, [id]);


  const handlePreferencesSubmit = async (preferences) => {
    const res = await fetch(`http://localhost:5000/api/users/${id}/preferences`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preferences),
    });
    const result = await res.json();
    console.log("Preferences saved:", result);
    setShowForm(false);
  };

  if (!user) return <p>Loading user profile...</p>;

  return (
    <div style={styles.container}>
      {/* LEFT SIDE: User Details */}
      <div style={styles.leftPanel}>
        <h2>👤 {user.name}'s Profile</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>

      {/* RIGHT SIDE: Preferences Form */}
      <div style={styles.rightPanel}>
        {showForm ? (
          <PreferencesForm onSubmit={handlePreferencesSubmit} />
        ) : (
          <p style={{ fontStyle: "italic" }}>Preferences already set ✅</p>
        )}
      </div>
      
      {/* <div style={{ marginTop: "2rem" }}>
  <h3>🏙️ Top Neighborhood Matches:</h3>
  {recommendations.length === 0 ? (
    <p>No recommendations available yet.</p>
  ) : (
    <ul>
      {recommendations.map((area, index) => (
        <li key={index}>
          <strong>{area.areaName}</strong> — Match Score: {area.score}
        </li>
      ))}
    </ul>
  )}
</div> */}

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "1.5rem",
    gap: "2rem",
    fontFamily: "'Poppins', sans-serif"
  },
  leftPanel: {
    margin:"2rem auto",
    flex: "1",
    padding: "1.5rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  rightPanel: {
    flex: "1",
  }
};

export default UserPage;
