import React from 'react';
import '../styles/dashbord.css'; 

const Dashboard = () => {
  return (
    <div className="window1" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="verti">
        <div className="v1">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="v2">
          <div className="inboxx" style={{ justifyContent: 'space-around' }}>
            <img style={{ marginTop: '30px' }} src="Home.png" alt="Home" />
            <img style={{ marginTop: '30px' }} src="Vector.png" alt="Vector" />
            <img style={{ marginTop: '30px' }} src="email.png" alt="Email" />
            <img style={{ marginTop: '30px' }} src="Frame 23.png" alt="Frame" />
            <img style={{ marginTop: '30px' }} src="email (1).png" alt="Another Email" />
            <img style={{ marginTop: '30px' }} src="Frame 19.png" alt="Frame 19" />
            <img style={{ marginTop: '30px' }} src="bar_chart.png" alt="Bar Chart" />
          </div>
        </div>
        <div className="v3">
          <div className="asbox">
            <img className="asb" src="../pages/user_icon.png" alt="User Icon" />
          </div>
        </div>
      </div>

      <div className="s">
        <div className="hory" style={{ display: 'flex', flexDirection: 'row' }}>
          <p className="Oneboxn">Onebox</p>
          <div className="darkmodebox" style={{ display: 'flex', gap: '22px' }}>
            <div className="firstd" style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="dfbox"></div>
              <img className="dfbox2" src="light_mode.png" alt="Light Mode" />
            </div>
            <div className="seconddark">
              <img className="imggg" src="Frame 2087326881.png" alt="Dark Mode" />
            </div>
          </div>
        </div>

        <div className="bigbox">
          <div className="inbox8"></div>
          <div className="inbox9">
            <div className="bb1">
              <img
                style={{ marginLeft: '276px' }}
                src="No Message illustration.png"
                alt="No Message"
              />
            </div>
            <div className="bb2">
              <div className="ttt">
                <p className="ttt1">It’s the beginning of a legendary sales pipeline</p>
                <p className="ttt2">When you have inbound E-mails you’ll see them here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
