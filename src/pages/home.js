import React from "react";
import "./style.css";

function Home() {
  return (
    <>
      <div className="bg">
        <div className="heading">
          <h1 className="select" style={{ textAlign: "center" }}>
            Select Language
          </h1>
        </div>
        <div className="flag-container">
          <div className="flag">
            <div className="en first">
              <a href="https://chiliecosystem.finance/indexen.html">
                {/* <img src="./assets/images/en-tra.png" /> */}
                <img src="./assets/images/en.jpeg" />
              </a>
            </div>
            <div className="es second">
              <a href="https://chiliecosystem.finance/indexes.html">
                {/* <img src="./assets/images/es-tra.png" /> */}
                <img src="./assets/images/es.jpeg" />
              </a>
            </div>
            <div className="cn last">
              <a href="https://chiliecosystem.finance/indexcn.html">
                {/* <img src="./assets/images/china-tra.png" /> */}
                <img src="./assets/images/china.jpeg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
