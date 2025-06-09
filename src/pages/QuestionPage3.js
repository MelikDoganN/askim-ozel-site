import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage3() {
  const navigate = useNavigate();
  const correctAnswer = '45';

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatHearts {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
      }
      .heart {
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: #6ec9f7;
        animation: floatHearts 6s linear infinite;
        clip-path: polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 60%, 50% 100%, 20% 60%, 0% 40%, 20% 20%, 39% 20%);
        opacity: 0.7;
      }
    `;
    document.head.appendChild(style);
    const container = document.getElementById('heart-bg');
    if (container) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);
        setTimeout(() => container.removeChild(heart), 6000);
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entered = userAnswer.trim();
    if (entered === correctAnswer) {
      setAnswered(true);
      setError('');
    } else {
      setError('Yanlış olabilir aşkım 😔 Bir kez daha bak istersen!');
    }
  };

  const handleNext = () => {
    navigate('/question4');
  };

  return (
    <div style={styles.container}>
      <div id="heart-bg" style={styles.heartContainer}></div>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 4</h2>
          <p style={styles.question}>Aşağıdaki zor soruyu çözebilir misin?</p>
          <img src="/eca9ab39-c3c5-48ab-b7b1-2f558e382815.png" alt="Zor Soru" style={styles.image} />
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Cevabını yaz..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Gönder</button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
        </>
      ) : (
        <div style={styles.response}>
          <h3>İnanılmazsın! 🔥</h3>
          <p>Bu zor soruyu bile çözdün ya. Sana hayran olmamak elde değil.  
             Kalbin kadar aklın da muhteşem şimom benim zeki şimom 💖</p>
          <button onClick={handleNext} style={styles.button}>Devam Et ❤️</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '60px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #e0f7ff, #f0fbff)',
    overflow: 'hidden',
    position: 'relative'
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  title: {
    fontSize: '24px',
    color: '#007acc',
    marginBottom: '10px',
  },
  question: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '2px solid #ccc',
  },
  form: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '80%',
    maxWidth: '300px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  response: {
    marginTop: '30px',
  }
};

export default QuestionPage3;
