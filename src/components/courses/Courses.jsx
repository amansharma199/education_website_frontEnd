import { Search } from "@material-ui/icons"
import Course_Card from "../course_card/Course_Card"
import "./courses.css"

const Courses = () => {
  return (
    <div className="courses" id="courses">
      <div className="wrapper">
        <div className="courses_top">
          <div className="courses_heading">
            <h1>Popular Courses</h1>
            <p>Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="courses_search">
            <input type="text" placeholder="Search Courses"/><Search className="course_search_icon" />
          </div>
        </div>

        <div className="courses_cards">
          <Course_Card
            img="/assets/education/web-dev-1.jpg"
            title="Web Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$99"
          />

          <Course_Card
            img="/assets/education/graphic-design.webp"
            title="Graphic Design Full Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$199"
          />

          <Course_Card
            img="/assets/education/web-dev-2.jpg"
            title="Full Stack Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$99"
          />

          <Course_Card
            img="/assets/education/phython.jpg"
            title="Phython Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$299"
          />

          <Course_Card
            img="/assets/education/web-dev-1.jpg"
            title="Web Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$99"
          />

          <Course_Card
            img="/assets/education/graphic-design.webp"
            title="Graphic Design Full Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$199"
          />

          <Course_Card
            img="/assets/education/web-dev-2.jpg"
            title="Full Stack Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$99"
          />

          <Course_Card
            img="/assets/education/phython.jpg"
            title="Phython Developer Course"
            dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            fees="$299"
          />

        </div>
      </div>
    </div>
  )
}

export default Courses