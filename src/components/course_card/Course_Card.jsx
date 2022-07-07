import "./course_card.css"

const Course_Card = (props) => {
  return (
    <div className="course_Card">
        <div className="course_card_top">
            <img src={props.img}/>
        </div>
        <div className="course_card_bottom">
            <h2>{props.title}</h2>
            <p>{props.dis}</p>
            <div className="course-card-btn">
              <div>{props.fees}</div>
              <button>Enroll Now</button>
            </div>
        </div>
    </div>
  )
}

export default Course_Card