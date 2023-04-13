import React from "react";

export const  Footer = () => {
    return (
      <footer id='footer'>
        <div className='inner container p-5'>
          <ul className='icons'>
            <li>
              <a href='#' className='icon alt fa-twitter'>
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon alt fa-facebook'>
                <span className='label'>Facebook</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon alt fa-instagram'>
                <span className='label'>Instagram</span>
              </a>
            </li>
            <li>
              <a href='#' className='icon alt fa-linkedin'>
                <span className='label'>LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className='copyright'>
            <li>Copyright © 2022</li>
          </ul>
        </div>
      </footer>
    );
};