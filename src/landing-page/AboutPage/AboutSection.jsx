
import Button from "../../Components/Button";
import "./aboutsectionStyle.css"
function AboutSection(){
    return(<>


<div className="aboutPage">
    <h1> A brief summary of what we do </h1>
<div className="wrappers">
    <div className="intro-video">
    <video controls >
    <source src="./media/business.mp4" type="video/mp4" /></video>
    </div>

    <div className="challengeBox">
    <Button className="intro-btn" btnInfo={"ANUJ TOMAR"}/>

     
          <Button  className="challenge-btn" btnInfo={"PICK THE RIGHT CHALLENGE"} />
        
           
    </div>
      
        </div>


</div>
     
    
     
    </>)
}

export default AboutSection;