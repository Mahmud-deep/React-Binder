import React from 'react';
import '../../styles/style.css';
import thumbnail from '../../assets/picturedeep.JPG';

export default function About() {
  return (
    <div style={{"padding":"0 20px 60px","color": "white", "fontFamily":"Helvetica"}}>
      <div style={{ "flexGrow":"1","minWidth":"300px","maxWidth":"960px","marginTop":"20px" }}>
      <h1>About Me</h1>

      <img className="deep" style={{"border":"5px solid #13293d","borderRadius":"3px","opacity":".8","width":"225px", "margin": "10px 0px"}} id="deep" src={thumbnail} alt="thumbnail of deep"></img>
        <p style={{"marginBottom":"11%"}}>
        <p>
          Hello, my name is Mahmud Khan Deep. Currently i'm Living in Toronto, ON. Currently i'm working in a Bank as role of Credit Specialist.
           Im graduated in Bussiness in University of Manitoba but i have weakness in Coding. I completed MYSQL database from university of Waterloo which made me more
           interested to learn coding, now i'm about to graduate from University of Toronto.
             
          </p> 
        </p>

      </div>
    </div>
  );
}