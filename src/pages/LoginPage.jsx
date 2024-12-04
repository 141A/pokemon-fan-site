/** 
 *  Author: Anthony Lei
 * 
 *  Worked on: 12/3/24 - 12/4/24
 * 
 *  This page used the component LoginRegister 
 *  to create a login / register page for the front end
 * 
*/

import React from 'react';
import LoginRegister from '../components/LoginRegister';
import '../css/styles.css';

function LoginPage() {
  return (
    <div>
      <h1>Login or Register to Pokemon Site</h1>
      <LoginRegister />
    </div>
  );
}

export default LoginPage;
