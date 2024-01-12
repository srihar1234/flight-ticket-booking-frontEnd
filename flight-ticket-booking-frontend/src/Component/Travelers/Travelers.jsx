import tamilnadu from "../../Assets/tamilnadu.jpg" 
import paris from "../../Assets/paris.jpg"
import london from "../../Assets/london.jpg"
import hari from "../../Assets/hari.jpg"
import profile from "../../Assets/profile.png"


function Travelers() {
  return (
    <div className="travellers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>

        <div className="travelersContainer grid">

          <div className="singleTraveler">
            <img src={tamilnadu} className="destinationImage"/>
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={hari} className="travelerImg"/>
              </div>
              <div className="travelerName">
                <span>Hari</span>
                <p>@hariTech</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src={paris} className="destinationImage"/>
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={profile} className="travelerImg"/>
              </div>
              <div className="travelerName">
                <span>Siva</span>
                <p>@sivaDev</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src={london} className="destinationImage"/>
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={profile} className="travelerImg"/>
              </div>
              <div className="travelerName">
                <span>Sandy</span>
                <p>@sandyCode</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Travelers
