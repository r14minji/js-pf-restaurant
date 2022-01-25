import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Panels from './components/Panels';
import Btns from './components/Btns';
import { useState } from 'react';

function App() {

  const jeju = ["제주앞바다", "돌담길", "해질녘", "성산일출봉", "제주감귤", "조랑말", "화산섬", "바람"];
  const seoul = ["남산한옥마을", "마포대교", "63빌딩", "롯데월드타워", "경복궁", "한강", "청계천", "서울숲벚꽃길"];
  const arr = ["남산한옥마을", "마포대교", "63빌딩", "롯데월드타워", "경복궁", "한강", "청계천", "서울숲벚꽃길"];
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
