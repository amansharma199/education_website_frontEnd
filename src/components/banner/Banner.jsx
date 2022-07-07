import "./banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="wrapper">
                <h2>Start Online Education</h2>
                <p>Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div>
                    <button className="get-started-btn banner-btn">Get Started</button>
                    <button className="courses-btn banner-btn">Courses</button>
                </div>
            </div>
        </div>
    )
}

export default Banner