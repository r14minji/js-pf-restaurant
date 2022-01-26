import { useEffect } from "react";

function Header(){

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
          <div style={{color: "#f44336"}}>Seoul</div>
          <div style={{color: "#e91e63"}}>Jeju</div>
          <div style={{color: "#9c27b0"}}>Gyeongju</div>
        </div>
      </nav>

    </>
    
  )
}

export default Header;