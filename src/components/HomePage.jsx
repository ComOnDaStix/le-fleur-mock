import React from "react";
import "./HomePage.css";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <section>
      <div className="homepage-container">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/NAIL_ONYX_WEB_1080x.jpg?v=1677133125"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/NAIL_JADE_WEB_1080x.jpg?v=1677178518"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0587/8179/4470/files/NAIL_PEACH_WEB_1080x.jpg?v=1677178532"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
