import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Panels from './components/Panels';
import Btns from './components/Btns';
import { useState } from 'react';

function App() {

  const arr = ["Blizzrads", "Calm", "Dust_Road", "Escape", "Payday", "Retreat", "Seasonal", "Verspers"];
  const deg = 360/arr.length;
  let [txt, setTxt] = useState(arr);


  return (
    <figure>
      <Header />

      <section>
        {
          txt.map((data, index) =>{
            return <Panels key={index} num={index} txt={data} deg={deg}/>
          })
        }
      </section>

      <Btns deg={deg} />

      <Footer />
    </figure>
  );
}

export default App;
