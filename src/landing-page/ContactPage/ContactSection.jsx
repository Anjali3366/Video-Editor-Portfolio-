import "./contactStyle.css"
import Button from "../../Components/Button";

function ContactSection(){

    return(<>
   

        <div className="contactPage" id="contact">
            <div className="contact-info">
            <h1>Want us to help you grow?</h1>
          <div className="contact-button">
          <Button  style={{bacground: "black"}}btnInfo={"CONTACTS "} />
          </div>
            </div>
        </div>

    </>);
}

export default ContactSection;