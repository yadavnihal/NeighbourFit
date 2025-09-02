// import MatchForm from "../components/MatchForm";

// function HomePage() {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>NeighborFit 🏘️</h1>
//       <MatchForm />
//     </div>
//   );
// }

// export default HomePage;

import HomeInfo from "../components/HomeInfo";
import MapSection from "../components/MapSection";
import LivabilityMetrics from "../components/LivabilityMetrics";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div> 
      <HomeInfo />
      <MapSection />
      <LivabilityMetrics/>
      <CTASection />
      <Footer/>
    </div>
  );
}

export default HomePage;

