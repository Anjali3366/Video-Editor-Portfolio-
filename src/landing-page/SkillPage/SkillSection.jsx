import "./skillStyle.css";

import Card from "../../Components/Card";

function SkillSection(){
    return(<>
   <div className="skills" id="skills">
   <h1>SKILLS that SET me Apart</h1>
    <div className="skill-wrapper">
    <Card cardHeading={"Premiere pro"} cardImgLink={"./media/pr.svg"}/>

    <Card cardHeading={"After effect"}  cardImgLink={"./media/ae.svg"}/>
     
        <Card cardHeading={"Da vinci resolve"} cardImgLink={"./media/da.svg"}/>

    </div>
   </div>
    </>);
}

export default SkillSection;