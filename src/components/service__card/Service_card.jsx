import "./service_card.css"

const Service_card = (props) => {
  return (
    <div className='service_card'>
      <div className="service-card-top">
        <img src={props.img}/>
      </div>
      <div className="service-card-bottom">
        <h2>{props.service_heading}</h2>
        <p>{props.service_dis}</p>
      </div>
    </div>
  )
}

export default Service_card;