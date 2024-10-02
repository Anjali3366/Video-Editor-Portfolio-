import "./cardStyle.css";


function Card({cardHeading,cardImgLink}){

    return(<>
    
<div className="cards">
    <div className="card-image">
        
            <img src={cardImgLink} alt="" />
    

    </div>
    <div className="card-info">
        <span>{cardHeading}</span>
    </div>
</div>


    </>);
}

export default Card;