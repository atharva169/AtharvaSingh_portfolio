
import React, { useRef, useCallback } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { TransitionContext } from './context/TransitionContext';
import { playPaperTransition } from './utils/paperTransition';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './layouts/Layout';

const App: React.FC = () => {
  const navigate = useNavigate();
  const busyRef = useRef(false);

  const requestTransition = useCallback((to: string) => {
    if (busyRef.current) return;
    if (window.location.pathname === to) return;
    busyRef.current = true;
    playPaperTransition(
      () => navigate(to),
      () => { busyRef.current = false; }
    );
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ requestTransition }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </TransitionContext.Provider>
  );
};

export default App;
