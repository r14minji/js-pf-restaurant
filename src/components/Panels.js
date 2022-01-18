function Panels(props){
  let rotatePanel = {transform: `rotate(${props.deg*props.num}deg) translateY(-100vh)`}
  let picImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.txt}.jpg)`}
  
  return(
    <article>
    <div className="inner">
      <div className="pic">
        <div className="dot"></div>
      </div>
      <div className="txt">
        <h2>food name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  </article>
  )
}

export default Panels;