import React from 'react';
import Project from '../Project';
import '../../styles/style.css';

import profile1 from '../../assets/work schedule.png';
import profile2 from '../../assets/J.A.T.E.png';
import profile3 from '../../assets/note taker.png';
import profile4 from '../../assets/techblog.png';
import profile5 from '../../assets/weatherdashboard.png';
import profile6 from '../../assets/Password-Generator-800x550.png';

export default function Portfolio() {
  return (
    <div style={{"padding":"0 20px 60px","fontFamily":"Helvetica"}}>
      <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"800px","marginTop":"20px", "color": "white" }}>
        <h1>Portfolio</h1>
        <div className="container" style={{paddingTop: '10px'}}>
          <div className="row">
            <Project
              key = "1"
              img = {profile1}  
              imgAlt = "artisan-itinerary"
              project = "https://mahmud-deep.github.io/artisan-itinerary/"
              projectAlt = "Work Day Scheduler"
              projectTitle = "Work Day Scheduler"
              gitHubRepo = "https://github.com/Mahmud-deep/artisan-itinerary"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: HTML and CSS powered by jQuery.." />
            <Project
              key = "2"
              img = {profile2}  
              imgAlt = "Word-processor"
              project = "https://mahmud-deep.github.io/Word-processor/"
              projectAlt = "Word-processor"
              projectTitle = "Word-processor"
              gitHubRepo = "https://github.com/Mahmud-deep/Word-processor"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, Heroku" />
          </div> 
          <div className="row">
            <Project
              key = "3"
              img = {profile3}  
              imgAlt = "Stenographist"
              project = "https://stenographist-8e260aa981b6.herokuapp.com/notes"
              projectAlt = "Note taker"
              projectTitle = "Note taker"
              gitHubRepo = "https://mahmud-deep.github.io/Stenographist/"
              gitHubAlt = "See app repository on Github"
              description = "Technology used: Express.js, Heroku, HTML, CSS" />
            <Project
              key = "4"
              img = {profile4}  
              imgAlt = "Tech-Blog"
              project = "https://github.com/Mahmud-deep/Tech-Blog"
              projectAlt = "Tech-Blog"
              projectTitle = "Tech-Blog"
              gitHubRepo = "https://mahmud-deep.github.io/Tech-Blog/"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: Node, sequelize, handlebars, express-session," />
          </div> 
          <div className="row">
            <Project
              key = "5"
              img = {profile5}  
              imgAlt = "Meteorology"
              project = "https://github.com/Mahmud-deep/Meteorology"
              projectAlt = "weather dashboard"
              projectTitle = "weather dashboard"
              gitHubRepo = "https://mahmud-deep.github.io/Meteorology/"
              gitHubAlt = "See game repository on GitHub"
              description = "Technology used: HTML, CSS, JavaScript" />
            <Project
              key = "6"
              img = {profile6}  
              imgAlt = "Password Generator"
              project = "https://mahmud-deep.github.io/prime-mover/"
              projectAlt = "Generates Passwords"
              projectTitle = "Generate Passwords"
              gitHubRepo = "https://github.com/Mahmud-deep/prime-mover"
              gitHubAlt = "See app repository on GitHub"
              description = "Technology used: HTML, CSS, Javascript" />
          </div> 
        </div>
      </div>
    </div>
  );
}
