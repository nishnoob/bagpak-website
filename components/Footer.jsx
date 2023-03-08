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
          height: 50px;
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
            <div>+968 9118 0162</div>
            <div>info@bagpaks.com</div>
          </div>
          <div className="exception"><div className="usp-divider" /><i className="ri-map-pin-line ri-2x" />Phase 7,<br/>Sohar Industrial City,<br/>Sultanate of Oman</div>
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
