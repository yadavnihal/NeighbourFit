 import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  // Generate random particles for animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -5 : particle.y + particle.speed * 0.1,
        x: particle.x + Math.sin(particle.y * 0.01) * 0.1,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        localStorage.setItem("userId", data.userId);
        navigate(`/user/${data.userId}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Animated Background */}
      <div style={styles.backgroundContainer}>
        {/* Gradient Orbs */}
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
        <div style={styles.gradientOrb3}></div>
        
        {/* Moving Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
        
        {/* Animated Waves */}
        <svg style={styles.waves} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={styles.waveAnimation}
          />
        </svg>
      </div>

      {/* Login Form Container */}
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <h1 style={styles.logo}>🏡 NeighborFit</h1>
        </div>
        
        <div style={styles.formCard}>
          <h2 style={styles.title}>Welcome Back!</h2>
          <p style={styles.subtitle}>Sign in to your account</p>
          
          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>📧</span>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.input}
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type="password"
                placeholder="Enter your password"
                style={styles.input}
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span style={styles.loadingSpinner}>⏳ Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <span style={styles.buttonIcon} className="button-icon">→</span>
                </>
              )}
            </button>
          </form>
          
          <div style={styles.divider}>
            <span style={styles.dividerText}>or</span>
          </div>
          
          <p style={styles.footerText}>
            Don't have an account?{" "}
            <a href="/signup" style={styles.link} className="login-link">Create one here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    zIndex: -1,
  },
  
  gradientOrb1: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite',
  },
  
  gradientOrb2: {
    position: 'absolute',
    top: '20%',
    right: '-30%',
    width: '80%',
    height: '80%',
    background: 'radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: 'float 8s ease-in-out infinite reverse',
  },
  
  gradientOrb3: {
    position: 'absolute',
    bottom: '-40%',
    left: '30%',
    width: '70%',
    height: '70%',
    background: 'radial-gradient(circle, rgba(255, 217, 61, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float 10s ease-in-out infinite',
  },
  
  particle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.6)',
    pointerEvents: 'none',
    filter: 'blur(1px)',
  },
  
  waves: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%',
    opacity: 0.3,
  },
  
  waveAnimation: {
    fill: 'rgba(255, 255, 255, 0.1)',
    animation: 'wave 4s ease-in-out infinite',
  },
  
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    zIndex: 1,
    position: 'relative',
  },
  
  logoSection: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  
  logo: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'white',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    margin: 0,
  },
  
  formCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    minWidth: '400px',
    maxWidth: '450px',
    textAlign: 'center',
  },
  
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '0.5rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2rem',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    fontSize: '1.2rem',
    zIndex: 2,
  },
  
  input: {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    fontSize: '1rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  
  button: {
    width: '100%',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  
  buttonIcon: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  
  loadingSpinner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  divider: {
    position: 'relative',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  
  dividerText: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  
  footerText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.95rem',
    margin: 0,
  },
  
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
};

// Add CSS animations
const animationCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
  
  @keyframes wave {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-20px); }
  }
  
  .login-input:focus {
    border-color: rgba(255, 255, 255, 0.6) !important;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2) !important;
  }
  
  .login-input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .login-button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4) !important;
  }
  
  .login-button:hover .button-icon {
    transform: translateX(5px) !important;
  }
  
  .login-link:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8) !important;
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationCSS;
  document.head.appendChild(style);
}

export default LoginPage;

 