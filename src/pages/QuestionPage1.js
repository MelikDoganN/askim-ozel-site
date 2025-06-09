import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage1() {
  const navigate = useNavigate();
  const correctAnswer = 'gwa';

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
        background-color: #ff5e78;
        animation: floatHearts 6s linear infinite;
        clip-path: polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 60%, 50% 100%, 20% 60%, 0% 40%, 20% 20%, 39% 20%);
        opacity: 0.6;
        z-index: 0;
      }
    `;
    document.head.appendChild(style);
    const container = document.getElementById('hearts');
    if (container) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);
        setTimeout(() => container.removeChild(heart), 6000);
      }, 400);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entered = userAnswer.toLowerCase().trim();
    if (entered === correctAnswer) {
      setAnswered(true);
      setError('');
    } else {
      setError('Hmm... Yanlış gibi. Hatırlarsan çok mutlu olurum. 📖');
    }
  };

  const handleNext = () => {
    navigate('/question2');
  };

  return (
    <div style={styles.container}>
      <div id="hearts" style={styles.heartLayer}></div>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 1</h2>
          <p style={styles.question}>Benim sana aldığım ilk okuma kitabının ilk harfleri?</p>
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
          <h3>Ne güzel hatırladın! 😍</h3>
          <p>
            “Genç Werther’in Acıları” benim için sadece bir kitap değil artık.  
            Onu sen okudun, o satırları sen gördün...  
            O kitap benim için en özel kitaplardan biri oldu.  
            Her satırında sen varsın, her satır sensin…  
            Birlikte aldığımız ilk kitap.  
          </p>
          <button onClick={handleNext} style={styles.button}>Devam Et ❤️</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(to top left, #fff0f5, #ffe6ea)',
    position: 'relative',
    overflow: 'hidden',
  },
  heartLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  title: {
    fontSize: '24px',
    color: '#d63384',
    marginBottom: '10px',
    zIndex: 1,
  },
  question: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '20px',
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
    backgroundColor: '#ff69b4',
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
  },
};

export default QuestionPage1;
