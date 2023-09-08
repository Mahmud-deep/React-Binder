import React from 'react';
import '../styles/style.css';
import banner from '../assets/portfolio image.webp';

export default function Header() {
    return (
      <div style={{ "border":"none","margin":"none", "backgroundColor":"#13293d", }} className="text-white">
      <h2 className='d-flex justify-content-center' style={{ fontSize: '60px', fontFamily: 'Helvetica'}}>
              Mahmud Khan Deep
            </h2>
            
            <div><p className='d-flex justify-content-center tag-line' style={{ fontSize: '20px', fontFamily: 'Lucida Console'}}>
              
            </p>
            <img style={{ "padding": "0 0 0", "height":"180px","width":"100%" }} src={banner} alt='header slash graphic'></img>
            </div>
        </div>  
    );
}