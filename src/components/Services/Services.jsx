import React from "react";
import "./services.scss";
import service1 from "../../assets/images/1.png";
import service2 from "../../assets/images/2.png";
import service3 from "../../assets/images/3.png";
import service4 from "../../assets/images/4.png";
const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__wrapper">
          <div className="service__card">
            <img src={service1} alt="Service 1" />
            <p>
              QUICK <br /> DELIVERY
            </p>
          </div>
          <div className="service__card">
            <img src={service2} alt="Service 2" />
            <p>
              PICK UP IN <br /> STORE
            </p>
          </div>
          <div className="service__card">
            <img src={service3} alt="Service 3" />
            <p>
              SPECIAL <br /> PACKAGING
            </p>
          </div>
          <div className="service__card">
            <img src={service4} alt="Service 4" />
            <p>
              RETURN & <br /> REFUND POLICY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
