import HomeSection from './landing-page/HomePage/HomeSection';
import './App.css';
import AboutSection from './landing-page/AboutPage/AboutSection';
import ExploreSection from './landing-page/ExplorePage/ExploreSection';
import ContactSection from './landing-page/ContactPage/ContactSection';

import LastInfo from './landing-page/ContactPage/LastInfo';

import Button from './Components/Button.jsx';
import SkillSection from './landing-page/SkillPage/SkillSection.jsx';
function App() {
 
return( <>
<HomeSection/>
<AboutSection/>
<ExploreSection/>
<SkillSection/>
<ContactSection/>
<LastInfo/>

</>);
}

export default App;
