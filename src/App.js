import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Panels from './components/Panels';
import Btns from './components/Btns';
import { useState } from 'react';

function App() {

  const arr = ["제주앞바다", "돌담길", "해질녘", "성산일출봉", "제주감귤", "조랑말", "화산섬", "바람"];
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
