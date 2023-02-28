import React from "react";
import { Link } from "react-router-dom";
import "./Tops.css";
import Footer from "../../components/Footer";

const Tops = () => {
  return (
    <section className="collection-container">
      <div className="row">
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/PETALERSSHIRTPINK01_540x.jpg?v=1670285268"
              alt=""
            />
            <h2>
              Petalers Chinstitch <br />Button Up Pink
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/PETALERSSHIRTGREEN01_360x.jpg?v=1670285205"
              alt=""
            />
            <h2>
            Petalers Chinstitch <br />Button Up Mint
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESCHOTTJACKETGREEN01_360x.jpg?v=1670456165"
              alt=""
            />
            <h2>
            Call Me Leather <br />Work Jacket Green
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESCHOTTJACKETCREAM01_360x.jpg?v=1670456130"
              alt=""
            />
            <h2>
            Call Me Leather <br />Work Jacket Cream
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/RICOPUFFERBROWN01_360x.jpg?v=1670456047"
              alt=""
            />
            <h2>
            Rico Puffer Jacket <br />Brown
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/RICOPUFFERORANGE01_360x.jpg?v=1670271550"
              alt=""
            />
            <h2>
            Rico Puffer Jacket <br />Orange
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOLORED01_360x.jpg?v=1670274468"
              alt=""
            />
            <h2>
                Wavy Strip Knit Polo Red
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/WAVYPOLOGREEN01_360x.jpg?v=1670274565"
              alt=""
            />
            <h2>
            Wavy Strip Knit Polo green
            </h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESILKSHIRTBLUE01_360x.jpg?v=1670270187"
              alt=""
            />
            <h2>Call Me Long Sleeve Button Up Blue</h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/CALLMESILKSHIRTORANGE01_360x.jpg?v=1670270312"
              alt=""
            />
            <h2>Call Me Long Sleeve Button Up Orange</h2>
          </Link>
        </div>
        <div className="item">
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0587/8179/4470/products/DIGILEOPARDSHIRTORANGE01_360x.jpg?v=1670273377"
              alt=""
            />
            <h2>Digi Leopard Silk Button Up Orange</h2>
          </Link>
        </div>
      </div>
      {/* additional rows omitted for brevity */}
      <Footer />
    </section>
  );
};

export default Tops;
