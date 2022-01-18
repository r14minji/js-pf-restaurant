import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Panels from './components/Panels';
import Btns from './components/Btns';
import { useState } from 'react';

function App() {
  return (
  <main>
      <Header />
      <section>
        <Panels />
      </section>
      <Btns />
      <Footer />
  </main>
  );
}

export default App;
