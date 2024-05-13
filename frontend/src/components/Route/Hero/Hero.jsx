import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqq0d67zw/image/upload/v1715519664/farm9_spjz4c.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[25px] leading-[1.2] 800px:text-[50px] text-[#3d3a3a] font-[600]`}
        >
          Discover fresh, sustainable produce and support your local farmers.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000]">
          {/* Browse a wide range of products, from farm-fresh fruits and vegetables
          to organic dairy and meats. Shop with confidence, knowing your
          purchases directly support local agriculture and promote a healthier
          planet. */}
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
