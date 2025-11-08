function MapPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🗺️ Explore Delhi Map</h2>
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=77.0685%2C28.4022%2C77.3264%2C28.7510&amp;layer=mapnik"
        style={styles.map}
        title="Delhi Map"
      ></iframe>
      <p style={styles.note}>
        Use the map above to zoom, pan and explore neighborhoods in Delhi!
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily:"'Poppins', sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  map: {
    width: "100%",
    height: "500px",
    border: "2px solid #ccc",
    borderRadius: "12px",
  },
  note: {
    marginTop: "1rem",
    color: "#555",
  },
};

export default MapPage;
