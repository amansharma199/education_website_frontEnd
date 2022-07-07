import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='wrapper'>
            <div className="header-Left">
                <h1>Education Academy</h1>
                <p>Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.</p>
                <button className="headerBtn get-started">Get Started</button>
                <button className="headerBtn learn-more">Learn More</button>
            </div>

            <div className="header-Right">
                <img src="/assets/education/University-Student1-PNG.png"/>
            </div>
        </div>
    </div>
  )
}

export default Header