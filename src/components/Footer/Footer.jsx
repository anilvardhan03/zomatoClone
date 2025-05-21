import Gstore from '../../assets/playstore.png';
import Appstore from '../../assets/appstore.png';
import indianFlag from '../../assets/icons8-india-96.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Youtube from '../../assets/youtube.png';
import React from "react";

const Footer = () => {
  const containerStyle = {
    backgroundColor: "#fdfdfd",
    padding: "40px 60px",
    fontFamily: "sans-serif",
    fontSize: "14px",
    color: "#333",
    borderTop: "1px solid #eaeaea",
  };

  const topRow = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: "30px",
  };

  const column = {
    minWidth: "180px",
    flex: "1",
  };

  const heading = {
    fontWeight: "bold",
    fontSize: "13px",
    textTransform: "uppercase",
    marginBottom: "12px",
  };

  const link = {
    display: "block",
    marginBottom: "6px",
    color: "#333",
    textDecoration: "none",
    cursor: "pointer",
  };

  const iconRow = {
    alignItems:"center",
    display: "flex",
    gap: "12px",
    margin: "12px 0",
  };

  const flagLangStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const storeBadge = {
    width: "140px",
    marginBottom: "10px",
    cursor: "pointer",
  };

  const bottomText = {
    fontSize: "12px",
    color: "#777",
    marginTop: "30px",
    borderTop: "1px solid #ddd",
    paddingTop: "20px",
  };

  return (
    <footer style={containerStyle}>
      <div style={topRow}>
        <div style={{ ...column, maxWidth: "160px" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/320px-Zomato_logo.png" alt="Zomato" width="120" />
        </div>

        <div style={column}>
          <div style={heading}>About Zomato</div>
          <a style={link}>Who We Are</a>
          <a style={link}>Blog</a>
          <a style={link}>Work With Us</a>
          <a style={link}>Investor Relations</a>
          <a style={link}>Report Fraud</a>
          <a style={link}>Press Kit</a>
          <a style={link}>Contact Us</a>
        </div>

        <div style={column}>
          <div style={heading}>Zomaverse</div>
          <a style={link}>Zomato</a>
          <a style={link}>Blinkit</a>
          <a style={link}>District</a>
          <a style={link}>Feeding India</a>
          <a style={link}>Hyperpure</a>
          <a style={link}>Zomato Live</a>
          <a style={link}>Zomaland</a>
          <a style={link}>Weather Union</a>
        </div>

        <div style={column}>
          <div style={heading}>Learn More</div>
          <a style={link}>Privacy</a>
          <a style={link}>Security</a>
          <a style={link}>Terms</a>
        </div>

        <div style={column}>
          <div style={heading}>Social Links</div>
          <div className="" style={iconRow}>
            <img className="" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" />
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" />
            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" width="20" />
          </div>
          <img className='m-2 rounded-4' src={Appstore} alt="App Store" style={storeBadge} />
          <img className='m-2 rounded-4' src={Gstore} alt="Google Play" style={storeBadge} />
        </div>
      </div>

      <div style={bottomText}>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
        All trademarks are properties of their respective owners. 2008–2025 © Zomato™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
