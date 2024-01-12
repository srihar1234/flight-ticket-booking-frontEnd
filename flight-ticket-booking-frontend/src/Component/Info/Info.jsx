import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs"
import { RxCalendar } from "react-icons/rx"


function Info() {
  return (
    <div className="info section">
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">
            View All
          </button>
        </div>

        <div className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon"/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also book your tickets through phone</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icon"/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also book your tickets through phone</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsBookmarkCheck className="icon"/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also book your tickets through phone</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Info
