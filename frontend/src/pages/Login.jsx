import React from 'react';
import '../styles/login.css'; 

const Login = () => {
  return (
    <div className="loginform">
      <div className="login">
        <img className="logo1" src="/assets/Logo_12.png" alt="Logo" />
      </div>
      <div className="login2">
        <div className="loginbox">
          <div className="box11">
            <p className="caa">Create a new account</p>
            <div className="gbox">
              <div className="inn" style={{ display: 'flex', flexDirection: 'row' }}>
                <img className="frame" src="/frontend/src/pages/Frame.png" alt="Google Logo" />
                <p className="signg">Sign Up with Google</p>
              </div>
            </div>
          </div>
          <div className="box12">
            <button className="btnbox">Create an Account</button>
            <div className="intext1" style={{ display: 'flex', flexDirection: 'row', marginTop: '24px' }}>
              <p>Already have an account?</p>
              <span className="sin" style={{ marginTop: '15px' }}>Sign In</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="footin">
          <img src="/frontend/src/pages/Frame4.png" alt="Footer" />
        </div>
      </div>
    </div>
  );
};

export default Login;
