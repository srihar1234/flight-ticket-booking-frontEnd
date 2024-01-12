import lounge from "../../Assets/lounge.jpg"

function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">

        <div className="imgDiv">
          <img src={lounge} />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">Help through airport</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur Services</span>
              <p>
                You can also contact airlines from your mobile
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Lounge
