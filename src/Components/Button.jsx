import "./buttonStyle.css";


function Button({btnInfo}){

    return(<>
    <div className="btn">
    <button className="contact-btn">{btnInfo}</button>
    </div>
  
    
    </>);
}

export default Button;