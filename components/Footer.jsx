const Footer = () => {
  return (
    <footer>
      <style jsx>{`
        footer {
          background-color: black;
          color: lightgrey;
          padding: 6rem 6rem 6rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 10rem;
        }

        .contact-info {
          font-family: 'system-ui';
          font-weight: 300;
          font-size: 16px;
          display: flex;
          flex-direction: column;
          margin-right: 2rem;
        }

        .contact-info div {
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between
        }

        .contact-info div.exception {
          align-items: center;
        }

        .contact-info .usp-divider {
          border-left: 1px solid #ddd;
          margin: 0 2rem;
          height: 150px;
          width: 5px;
        }

        .contact-info i {
          margin-right: 1.5rem;
        }

        .legal {
          font-family: 'system-ui';
          font-weight: 300;
          font-size: 12px;
          color: lightgrey;
        }

        h3 {
          font-size: 32px;
          margin-bottom: 2rem;
          color: var(--primary);
          font-family: 'Abril Fatface', cursive;
          font-weight: thin;
        }
        .right-wrapper {
          text-align: center;
        }
        .contact-container {
          display: flex;
          justify-content: start;
        }
        .contact-container .texts {
          display: flex;
          flex-direction: column;
          align-items: start;
        }
        a {
          text-decoration: none;
          color: lightgrey;
        }

        @media (max-width:768px) {
          footer {
            flex-direction: column;
            padding: 2rem 2rem 6rem;
          }
          .contact-container {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .contact-info .usp-divider {
            display: none;
          }
          .contact-info {
            margin-right: 0;
            
          }
          .right-wrapper {
            margin: 4rem auto 0;
          }
          h3 {
            text-align: center;
          }
        }
      `}</style>
      <div className="contact-info">
        <h3>Contact us</h3>
        <div className="contact-container">
          <div className="texts">
            <div><a href="tel:+96892208039">+968 9220 8039</a></div>
            <div><a href="tel:+96892240805">+968 9224 0805</a></div>
            <div><a href="tel:+96891180162">+968 9118 0162</a></div>
            <div><a href="mailto:info@bagpaks.com">info@bagpaks.com</a></div>
          </div>
          <div className="exception"><div className="usp-divider" /><i className="ri-map-pin-line ri-2x" />Plot No. 25, Squara 4,<br/>P.O. Box: 170, PC: 311,<br/>Fala Al - Ouhi Industrial Area,<br/>Sohar, Sultanate of Oman</div>
        </div>
        {/* <div className="legal">© 2023 Company. All rights reserved.</div> */}
      </div>
      <div className="right-wrapper">
        <img src="/bagpaks-logo.png" alt="Company Logo" className="logo" />
        <div className="legal">Copyright © 2023 Bagpaks | All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
