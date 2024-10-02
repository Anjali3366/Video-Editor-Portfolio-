import "./rightvideoStyle.css"


function RightVideoCard({mainheading,subheading,videoSource}){
    return(<>
<div className="rightVideo">
<div className="video-wrapper">

<div className="info">
    <h1>{mainheading}</h1>
    <span><p>{subheading}</p></span>
</div>
<div 
className="video-container">
     <video className=" video right-video" autoPlay loop muted>
     <source src={videoSource} type="video/mp4" /></video>
</div>
</div>
</div>
    </>)
}

export default RightVideoCard;