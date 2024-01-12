import clouds from "../../Assets/clouds.mp4";
import plane from "../../Assets/plane.png";


function Home() {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h1>CREATE EVER LASTING MEMORIES WITH US</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={clouds} autoPlay muted loop className="video"></video>
        </div>

        <img src={plane} className="plane"/>
      </div>
    </div>
  )
}

export default Home

