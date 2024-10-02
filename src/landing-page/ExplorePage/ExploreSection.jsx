import LeftVideoCard from "./LeftVideoCard";
import RightVideoCard from "./RightVideoCard";
import WhoisUser from "./WhoIsUser";

function ExploreSection(){
    return(<>

  <div className="explore" id="explore">
  <RightVideoCard  mainheading={"If you're a Coach"} subheading={"We can make it for you !!"} videoSource={"./media/creator.mp4"}/>
    <LeftVideoCard  mainheading={"If you're a Content Creator"} subheading={"We can make it for you!!"}videoSource={"./media/business.mp4"}/>
    <RightVideoCard  mainheading={"you're a Business owner"} subheading={"can make it for you !!"} videoSource={"./media/creator.mp4"}/>
    <LeftVideoCard mainheading={"If you're an Investor"} subheading={"We can make if for YOU!!"} videoSource={"./media/business.mp4"}/>
    <RightVideoCard  mainheading={"If you're a Service Provider"} subheading={"We can make it for YOU!!"} videoSource={"./media/creator.mp4"}/>
    <WhoisUser/>
  </div>
    </>)
}

export default ExploreSection;