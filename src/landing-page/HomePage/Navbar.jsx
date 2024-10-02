import './navbarstyle.css';

function Navbar(){
    return(
        <>

<header class="header">
   <div className="logoBox">
   <a href="#home" class="logo">
    <video className="logo-video" autoPlay loop muted>
    <source src="./media/business.mp4" type="video/mp4" /></video></a>
   </div>



    
        <div className="navbar-option">
        <a href="#home" class="active">Home</a>

<a href="#about">About</a>
<a href="#explore">Explore</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact </a>
      
      
    </div>
</header>




    
        </>
    );
}

export default Navbar;


