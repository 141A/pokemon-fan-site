/** 
 *  Author: Anthony Lei
 * 
 *  Worked on: 12/2/24 - 12/2/24
 * 
 *  This page is to inform the user that
 *  there is a 404 error meaning that the
 *  page they are looking for can't be found
 *  and providing a button for them to return
 *  to the home page
 * 
*/

import React from 'react';
import '../css/PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="mainBox">
      <h1>404 Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <button onClick={() => window.location.href = '/'}>Go Back to Home</button>
    </div>
  );
}
