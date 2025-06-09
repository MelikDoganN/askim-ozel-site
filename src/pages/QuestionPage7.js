import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage7() {
  const navigate = useNavigate();
  const correctAnswer = 'mandala';

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entered = userAnswer.toLowerCase().trim();
    if (entered === correctAnswer) {
      setAnswered(true);
      setError('');
    } else {
      setError('Hatırla aşkım, o renkli anı yaşadığımız yeri 💜');
    }
  };

  const handleNext = () => {
    navigate('/question8');
  };

  return (
    <div style={styles.container}>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 7</h2>
          <p style={styles.question}>Bu resmi çizdiğimiz kafenin adı neydi?</p>
          <img
            src="/WhatsApp Görsel 2025-06-09 saat 19.24.20_4b96107c.jpg"
            alt="Mandala Cafe Hatırası"
            style={styles.image}
          />
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
          <h3>Evet, Mandala!</h3>
          <p>Orada renklerle oynarken seni izlemek bana huzur vermişti.  
             Ruhun da kalbin gibi güzel… o gün asla unutamam 💞</p>
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
    maxWidth: '300px',
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

export default QuestionPage7;
