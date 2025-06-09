import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage3() {
  const navigate = useNavigate();
  const correctAnswer = '45';

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState('');

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
  },
  title: {
    fontSize: '24px',
    color: '#d63384',
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
  }
};

export default QuestionPage3;
