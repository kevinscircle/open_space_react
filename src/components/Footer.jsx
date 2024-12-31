import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-buttons-container">
        <div className="social-button facebook-button"></div>
        <div className="social-button insta-button"></div>
        <div className="social-button twitter-button"></div>
        <div className="social-button pinterest-button"></div>
      </div>
      <div className="footer-links-container">
        <div className="footer-flex-column">
          <ul>
            Home
            <li>Chillwave</li>
            <li>Gluten-free</li>
            <li>Kitsch Cardigan</li>
          </ul>
        </div>
        <div className="footer-flex-column">
          <ul>
            Services
            <li>Fingerstache</li>
            <li>Lumbersexual</li>
            <li>Lo-Fi Aesthitic</li>
          </ul>
        </div>
        <div className="footer-flex-column">
          <ul>
            About Us
            <li>Kale Chips</li>
            <li>Church Key</li>
            <li>Longboarding</li>
          </ul>
        </div>
        <div className="footer-flex-column">
          <ul>
            Contact 
            <li>Pinterest</li>
            <li>Etsy</li>
            <li>Blog Swag</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
