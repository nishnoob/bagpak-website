const HeroSection = () => {
  return (
    <div>
      <style jsx>{`
        .hero {
          position: relative;
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-image: url('/hero-background.jpg');
          background-size: cover;
          background-position: center center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #00000075;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .logo img {
          height: 8rem;
          margin-right: 0.5rem;
        }

        .main-text {
          color: var(--primary);
          font-family: 'Abril Fatface', cursive;
          font-size: 3rem;
          font-weight: thin;
          text-align: center;
        }

        @media (max-width:768px) {
          .main-text {
            padding: 0 1rem;
            font-size: 2rem;
          }
        }

      `}</style>
      <div className="hero">
        <div className="overlay">
          <div className="logo">
            <img src="/bagpaks-logo.png" alt="Bagpaks Logo" />
          </div>
          <h1 className="main-text">Industry leading <br/> Polypropylene (PP) FIBC <br/> Manufacturers</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
