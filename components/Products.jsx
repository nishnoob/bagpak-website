const Products = () => {
  return (
    <div>
      <style jsx>{`
        .usp-section {
          padding: 8rem 6rem;
          font-family: 'system-ui';
          color: var(--text);
          text-align: center;
        }

        h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: black;
          font-family: 'Abril Fatface', cursive;
          font-weight: thin;
          text-align: center;
        }

        h4 {
          font-size: 32px;
          margin-bottom: 2rem;
          color: black;
          font-weight: thin;
        }

        .usp-divider {
          border-top: 1px solid #ddd;
          margin: 0 auto 4rem;
          width: 10rem;
        }

        p {
          font-family: 'system-ui';
          font-size: 20px;
          text-align: center;
          line-height: 36px;
        }

        .deco {
          font-family: 'Abril Fatface', cursive;
          font-weight: thin;
          color: var(--primary);
        }

        img {
          margin: 4rem 0;
        }

        .usp-item {
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: space-evenly;
        }

        .usp-item.opposite {
          flex-direction: row-reverse;
        }

        .usp-item.wheader {
          flex-direction: column;
          margin-bottom: 6rem;
        }

        .usp-item.wheader h4 {
          flex-direction: column;
          padding-top: 0;
          margin-top: 0;
          font-size: 1.6rem;
        }

        .usp-item div {
          flex: 1;
          text-align: center;
        }

        .usp-item h4 {
          font-size: 2rem;
          margin-bottom: 1rem;
          width: 70%;
        }

        .usp-item p {
          font-size: 1.2rem;
          line-height: 1.5;
          width: 70%;
        }

        .loop-title {
          text-align: center;
          margin-top: 8rem;
        }
        
        @media (max-width:768px) {
          .usp-section {
            padding: 2rem;
            font-family: 'system-ui';
            color: var(--text);
            text-align: center;
          }
          .usp-item {
            flex-direction: column-reverse;
          }
          .usp-item.opposite {
            flex-direction: column-reverse;
          }
          .usp-item h4, .usp-item p {
            font-size: 1.2rem;
            line-height: 1.5;
            width: 100%;
          }
        }
      `}</style>
      <div className="usp-section">
        <h2>Products</h2>
        <div className="usp-divider" />
        <p>
          We offer a wide range of options when it
          comes to FIBC.<br/> With attention to detail, and
          proper understanding of what our
          customers demand,<br/> rest assured the quality
          and options one has with <span className="deco">BagPacks</span> is wide.
        </p>
        <img src="./fibc-1.png" width="100%"/>
        <img src="./fibc-2.png" width="100%"/>
        <div className="usp-item">
          <div>
            <h4>Standard and UN FIBCs</h4>
            <p>
              Coated or uncoaated sheet with and
              without dust proofing. Available with
              various filling, unloading and hoisting
              systems. with proper UN quidelines.
            </p>
          </div>
          <div>
            <img src="./fibc-t1.png" width="50%" />
          </div>
        </div>
        <div className="usp-item opposite">
          <div>
            <h4>Baffle/Formstable FIBC</h4>
            <p>
              These FIBCs (O/Baffle bags) have
              been specially developed for
              improved stability and a more
              efficiend load volume. Saves transport
              costs.
            </p>
          </div>
          <div>
            <img src="./fibc-t2.png" width="50%" />
          </div>
        </div>
        <div className="usp-item">
          <div>
            <h4>Ventilated FIBC</h4>
            <p>
              FIBCs used for transporting cargoes
              requiring ventilation and breathability
              like vegetables, etc.
            </p>
          </div>
          <div>
            <img src="./fibc-t3.png" width="50%" />
          </div>
        </div>
        <h4 className="loop-title">Loop types</h4>
        <div className="usp-divider" />
        <img src="./loop-types-2.png" width="70%"/>
        <img src="./loop-types-1.png" width="100%"/>
        <h4 className="loop-title">Our various offerings</h4>
        <div className="usp-divider" />
        <div className="usp-item wheader">
          <img src="./fibc-buffle.png" width="80%"/>
          <h4>FIBC - Buffle Bags</h4>
          <p>
            A standard FIBC bag which is filled to
            capacity with material to be stored or
            transported tends to bulge a lot.
            Baffle bags have baffles which are basically
            panels of fabric on each side of the bag
            which do not allow it to get out of shape
            even when full. Both Baffle and Standard
            FIBCs are used for different materials.
          </p>
        </div>
        <div className="usp-item wheader">
          <img src="./pp-woven-bag.png" width="20%"/>
          <h4>PP Woven Sacks / Small Bags</h4>
          <p>
            Woven PP bags are laminated with a polypropylene coating, inside or outside, giving an added barrier to
            moisture and product leakage, without hindering Easy- Open and Re-Closure options. They are also UV
            stabilised for a longer lifespan when exposed to sunlight.
            These sacks allow sufficient passage of air to the packed items and ensure the phenomenon of "breathing
            space in packed grains. They can also be laminated for the moisture proof packing of different items.
            Features
            Fabric weight from 65 qsm to 200 gsm, Extrusion coated and uncoated versions
            10 x10, 10 x 8, 12 x 12 and 14 x 14 weave construction, Multi-color printing, Ultraviolet (UV) protection
            Common products packaged in woven PP bags are:
            Salt, Coal, Flour, Sand, Fertilizer, Pet Food, Feed and Seed, Cement / Aggregate, Chemicals, Powders,
            Rice Grains, Beans.
          </p>
        </div>
        <div className="usp-item wheader">
          <img src="./sewing-machine.png" width="60%"/>
          <h4>Small Bag Sewing Machine</h4>
          <p>
            We come equipped with the best Small Bag Sewing machine with
            variable stiching and finish options for our customers. The machine
            ensures the quality and finish of the end product is always at the
            best Industry Standards and complies with the international norms.
            Strong, Sturdy Construction of PPE materials is essential quality of
            bags manufactured by this machine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
