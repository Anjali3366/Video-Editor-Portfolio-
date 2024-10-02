import "./whoIsUserStyle.css"


function WhoisUser(){
    return(<>
  <div className="whoIsUser">
    <div className="wrapper">
        <div className="aboutUser">
            <h1>Whatever you are, </h1>
            <h2>whoever you are </h2>
            <p>We can make something like this happen with you :) </p>
        </div>
        <div className="userImg">
            <img src="./media/whoisUser.jpg" alt="" />
        </div>
    </div>
  </div>
    </>)
}

export default WhoisUser;