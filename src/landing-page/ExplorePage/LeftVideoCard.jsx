import "./rightvideoStyle.css"

function LeftVideoCard({mainheading, subheading,videoSource}){
    return(<>
    <div className="leftVideo">
    <div className="video-wrapper">
     <div 
className="video-container">
     <video className="video left-video" autoPlay loop muted>
     <source src={videoSource} type="video/mp4" /></video>
</div>
<div className="info">
    <h1>{mainheading}</h1>
    <span><p>{subheading}</p></span>
</div>

</div>
    </div>
    </>)
}

export default LeftVideoCard;