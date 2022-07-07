import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="wrapper">

          <div className="footer_about">
            <h3 className="footer_title">EduCare</h3>
            <p className="footer_text">Lorem Ipsum is simply dummy text adsde of the ad printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>

          <div className="footer_contact">
            <h3 className="footer_title">Email</h3>
            <p className="footer_text">amankumar.sharma199@gmail.com</p>
            <h3 className="footer_title title-margin">Address</h3>
            <p className="footer_text">abc colony</p>
            <p className="footer_text">xyz market no. 1</p>
            <p className="footer_text">Muzaffarpur, Bihar</p>
          </div>

          <div className="footer_phone">
            <h3 className="footer_title">Phone</h3>
            <p className="footer_text">+91 1234 56 4547</p>
          </div>

          <div className="footer_followUs">
            <h3 className="footer_title">Follow Us</h3>
            <div className="footer_newslater">
              <input type="text" placeholder="Subscribe" />
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="footer_icon">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_copyright">Aman Sharma</div>
    </>
  )
}

export default Footer