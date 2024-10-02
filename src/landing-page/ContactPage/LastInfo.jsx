import "./contactStyle.css"
function LastInfo(){

    return(<>

    <div className="last-info">
        <p>A.J THAKUR | &copy;rights reserved</p>
        <div className="contact-details">
            <p>Contact No: +91 82879 07734</p>
            <p className="slash">
                |
            </p>
            <p>E-mail: abc@gmail.com</p>
        </div>

        <div className="contact-way">
           <a href="https://discord.com/users/1269215805359525898" className="discord" target="_blank"><i className="fa-brands fa-discord"><span>edit.rium_x_aj</span></i> </a>

          
           <a  href="https://www.instagram.com/edito.rium_x_aj?igsh=bW45bWYwOXk0OGJu"
           className="instagram" target="_blank"> <i className="fa-brands fa-instagram "><span>edit.rium_x_aj</span></i> </a>
        </div>
    </div>
    
    </>);
}

export default LastInfo;