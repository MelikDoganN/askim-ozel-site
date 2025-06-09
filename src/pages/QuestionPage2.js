import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage2() {
  const navigate = useNavigate();
  const correctAnswer = 'carla';

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
      setError('Canım, bir daha düşün. O çok özel bir sesti... 🎶');
    }
  };

  const handleNext = () => {
    navigate('/question3');
  };

  return (
    <div style={styles.container}>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 2</h2>
          <p style={styles.question}>Bizim "şarkımız olsun" dediğimiz şarkıcının adı neydi?</p>
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
          <h3>Bravo! 🎶</h3>
          <p>Carla'nın sesi ikimizin dünyasını sanki özetliyordu.  
             O sesi duyduğumda hep seni hatırlıyorum. 💞 son birkaç gundur dinlemediğim saniye dk yok her an dinliyorum nereye baksam nereye baksam nereye çevirsem gozlerimi seni goruyorum </p>
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

export default QuestionPage2;