import { useEffect } from "react";

function Header(props){
  const seoul = ["남산한옥마을", "마포대교", "63빌딩", "롯데월드타워", "경복궁", "한강", "청계천", "서울숲벚꽃길"];
  const jeju = ["제주앞바다", "돌담길", "해질녘", "성산일출봉", "제주감귤", "조랑말", "화산섬", "바람"];
  const gyeongju = ["대릉원", "동궁과월지", "첨성대", "주상절리", "불국사", "석굴암", "첨성대", "경주한옥마을"];

  useEffect(()=>{
    var boxes = document.querySelectorAll('#boxes > div');
    [].forEach.call(boxes, box => {
    box.addEventListener('mousemove', e => {
      document.body.style.setProperty(
        'backgroundColor',
        box.style.getPropertyValue('color')
      );

      var size = parseInt(getComputedStyle(box).width);
      
      // scaling
      var x = size * .3 * .7 + .7 * e.offsetX;
      var y = size * .3 * .7 + .7 * e.offsetY;
      
      box.style.setProperty('--x', x);
      box.style.setProperty('--y', y);
      box.style.setProperty('--size', size);
    });
  });
  },[])

  return (
    <>
      <h1>
        <strong>travel in korea</strong><br />
        <span>Let's go on a trip togather</span>
      </h1>

      <nav id="gnb">
        <div id="boxes">
          <div onClick={()=>{
            props.getTxt(seoul);
          }}>Seoul</div>
          <div onClick={()=>{
            props.getTxt(jeju);
          }}>Jeju</div>
          <div onClick={()=>{
            props.getTxt(gyeongju);
          }}>Gyeongju</div>
        </div>
      </nav>

    </>
    
  )
}

export default Header;