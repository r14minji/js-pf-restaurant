function Panels(props){
  let rotatePanel = {transform: `rotate(${props.deg*props.num}deg) translateY(-100vh)`}
  let picImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.txt}.jpg)`}
  
  return(
    <div className="wrap">

      </div>
  )
}

export default Panels;