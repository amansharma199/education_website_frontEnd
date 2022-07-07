import Service_card from "../service__card/Service_card"
import "./services.css"

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="wrapper">
                <div className="services-heading">
                    <h1>Our Services</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and printing <br />typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className="services-cards">
                    <Service_card
                        img="/assets/education/teacher.jpg"
                        service_heading="Skilled Educator"
                        service_dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                    <Service_card
                        img="/assets/education/discipline.jpg"
                        service_heading="Dicipline"
                        service_dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                    <Service_card
                        img="/assets/education/sports.jpeg"
                        service_heading="Sports Facility"
                        service_dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                    <Service_card
                        img="/assets/education/placement.webp"
                        service_heading="Easy Placement"
                        service_dis="Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                </div>
            </div>
        </div>
    )
}

export default Services