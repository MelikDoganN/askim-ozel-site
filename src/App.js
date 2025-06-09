// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import QuestionPage1 from './pages/QuestionPage1';
import QuestionPage2 from './pages/QuestionPage2';
import QuestionPage3 from './pages/QuestionPage3';
import QuestionPage4 from './pages/QuestionPage4';
import QuestionPage6 from './pages/QuestionPage6';
import QuestionPage7 from './pages/QuestionPage7';
import QuestionPage8 from './pages/QuestionPage8';
import LetterPage from './pages/LetterPage';
import GalleryPage from './pages/GalleryPage';
import SecretPage from './pages/SecretPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/question1" element={<QuestionPage1 />} />
        <Route path="/question2" element={<QuestionPage2 />} />
        <Route path="/question3" element={<QuestionPage3 />} />
        <Route path="/question4" element={<QuestionPage4 />} />
        
        <Route path="/question6" element={<QuestionPage6 />} />
        <Route path="/question7" element={<QuestionPage7 />} />
        <Route path="/question8" element={<QuestionPage8 />} />
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
