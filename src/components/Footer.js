import React from 'react';
import '../styles/style.css';
import githublogo from '../assets/GitHub-Mark-Light-64px.png';
import linkedinlogo from '../assets/In-White-96.png';
import emaillogo from '../assets/email-logo.png';


export default function Footer() {
    return (
      <div>
        <div className='d-flex justify-content-center p-2' style={{ "backgroundColor":"#13293d" }}>
        <a className="github" href="https://github.com/Mahmud-deep" alt="Link to GitHub account"><img style={{ "padding":"15px" }} src={githublogo} alt="Link to GitHub account" width="64"></img></a>
        <a className="linkedin" href="https://www.linkedin.com/in/mahmud-deep-047367290/" alt="Link to LinkedIn"><img style={{ "padding":"15px" }} src={linkedinlogo} alt="LinkedIn account" width="64"></img></a>
        <a className="email" href="mailto:mahmuddeep7@gmail.com" alt="Link to email"><img style={{ "padding":"15px" }} src={emaillogo} alt="Email Jacob" width="64"></img></a>
        </div>
        <div className='d-flex justify-content-center' style={{ "backgroundColor":"#13293d", "color": "white" }}>
        &copy;Made by Mahmud Khan Deep
        </div>
      </div>
    );
  }