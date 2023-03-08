const USPSection = () => {
  return (
    <div>
      <style jsx>{`
        .usp-section {
          display: flex;
          justify-content: space-between;
          padding: 6rem 6rem;
          font-family: 'system-ui';
          color: var(--text);
        }

        .usp-item {
          width: 30%;
          text-align: center;
        }

        .usp-item h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .usp-item p {
          font-size: 1.2rem;
          line-height: 1.5;
        }

        @media (max-width:768px) {
          .usp-section {
            flex-direction: column;
            padding: 4rem 1rem;
          }
          .usp-item {
            width: auto;
          }
        }
      `}</style>
      <div className="usp-section">
        <div className="usp-item">
          <img src="./usp1.png" width="20%" />
          <h3>Product Development</h3>
          <p>
            We constantly strive to develop latest techniques to ensure only the best products are manufactured
          </p>
        </div>
        <div className="usp-item">
          <img src="./usp2.png" width="20%" />
          <h3>Market Analysis</h3>
          <p>
            We believe in following the latest Industry & market trends to provide the latest solution.
          </p>
        </div>
        <div className="usp-item">
          <img src="./usp3.png" width="20%" />
          <h3>Client Management</h3>
          <p>
            Our customers are at the forefront. We pride in associating closely with our clients & offer latest innovations with class leading quality assurance.
          </p>
        </div>
        {/* <div className="usp-item">
          <h3>Quality Assurance</h3>
          <p>
            Quality assurance and customer centric approach lead us in the
            industry and provide us an energy to manufacture highly
            promising, innovative and qualitative products at effective cost.
            Following factors are our driving force.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default USPSection;
