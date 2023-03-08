const AboutUs = ({ title = "Why choose us?" }) => {
  return (
    <div>
      <style jsx>{`
        .usp-section {
          display: flex;
          flex-direction: column;
          padding: 2rem 20% 4rem;
          background: #F5F5F5;
          font-family: 'system-ui';
          color: var(--text);
        }

        .usp-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--primary);
          font-family: 'Abril Fatface', cursive;
          font-size: 3rem;
          font-weight: thin;
          text-align: center;
        }

        .usp-divider {
          border-top: 1px solid #ddd;
          margin: 1rem auto;
          width: 10rem;
        }

        .usp-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.3rem;
          line-height: 1.5;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding-left: 1em; 
          text-indent: -.7em;
        }

        li::before {
          content: "• ";
          color: var(--primary); /* or whatever color you prefer */
        }

        @media (max-width:768px) {
          .usp-section {
            padding: 2rem 2rem 4rem;
          }
        }

      `}</style>
      <div className="usp-section">
        <h2 className="usp-title">{title}</h2>
        <div className="usp-divider" />
        <div className="usp-item">
          <p>
            Quality assurance and customer centric approach lead us in the industry and enables us the energy to manufacture highly promising, innovative and quality products at effective.
          </p>
          <ul>
            <li>
              Advanced equipments and stringent quality measurement.
            </li>
            <li>
              Commitment to hygiene and cleanliness ensures food grade FIBCs that are sanitised and free from dust, germs and pollutants.
            </li>
            <li>
              Integrate suitable techniques for quality improvement.
            </li>
          </ul>
        </div>
      </div>
      <div className="usp-section">
        <h2 className="usp-title">About our Company</h2>
        <div className="usp-divider" />
        <div className="usp-item">
          <p>
            We believe in stepping and attaining an extra mile when
            it comes to quality of everything we do. Continual efforts
            of quality improvement and commitment to comply
            with international quality norms won us customers all
            over the globe. Innovative products, unmatched quality
            and dedicated support services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
