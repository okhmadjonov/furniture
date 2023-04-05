import React from "react";
import "./Banner.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import sliderImg from "../../assets/images/slider.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner_card">
          <div className="banner__title">
            <h3 className="b_title">
              W<span>OODEN</span> T<span>ABLE</span> S<span>ET</span>
            </h3>
            <p className="b_subtitle">
              Aliquet donec ut arcu risus amet mattis diam gravida. Ac
              vestibulum quis proin in aliquam et et auctor. Amet urna est arcu
              euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo
              habitant amet quisque. Velit ornare pellentesque facilisi in odio
              nibh.
            </p>
            <Link className="b_shopnow">
              <button>
                SHOP NOW <BsArrowRight />
              </button>
            </Link>
          </div>
          <div className="banner__img">
            <img src={sliderImg} alt="Banner Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
