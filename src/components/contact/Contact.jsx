import "./contact.css"

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <h1 className="contact_heading">Contact Us</h1>
                <div className="address_details">
                    <h1>LandMark</h1>
                    <div className="adress_detail_1">
                        <div>
                            <p>abc colony</p>
                            <p>xyz road</p>
                            <p>Muzaffarpur, Bihar</p>
                        </div>
                        <div>
                            +91 123 4564 845
                            amankumar.sharma199@gmail.com
                        </div>
                    </div>
                </div>
                <div className="contact_us">
                    <div className="contact_form">
                        <form>
                            <input type="text" placeholder="Name : "/>
                            <input type="text" placeholder="Parents Name : "/>
                            <input type="text" placeholder="Phone : "/>
                            <input type="text" placeholder="Email : "/>
                            <textarea placeholder="Message"/>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="contact_map">
                        <img src="/assets/education/map.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact