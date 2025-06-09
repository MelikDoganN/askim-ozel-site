import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/question1');
  };

  return (
    <div style={styles.container}>
      <div style={styles.stars}></div>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Hoş Geldin Zeynom 💖</h1>
        <p style={styles.subtitle}>Bu sayfa sadece senin için En değerlim İçin</p>
        <p style={styles.text}>Umarım beğenirsin şimom herşeyim Biskuvisitim</p>
        <button style={styles.button} onClick={handleNext}>Hazırım ❤️</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #ffdde1, #ee9ca7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  stars: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    animation: 'twinkle 2s infinite',
    zIndex: 0,
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '25px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    maxWidth: '500px',
    width: '90%',
  },
  title: {
    fontSize: '30px',
    color: '#d63384',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    borderRadius: '30px',
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default WelcomePage;