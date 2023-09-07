function Card (props) {
    return(
      <>

       {props.cardDetails.map((cardInfo)=>{
        return (
          <div className="card">
            <img src={cardInfo.imgUrl} alt="Avatar" width={100} height={100}></img>
             <div className="container">
               <h4><b>{cardInfo.imgName}</b></h4>
               <p>{cardInfo.imgDes}</p>
            </div>
          </div>
        )
       })}

      </>
       
    )
}

export default Card;