import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import apple from "../assets/images/apple.jpg";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className="product-details">

        <div className="left">

          <img
            src={apple}
            alt="Apple"
          />

        </div>

        <div className="right">

          <h1>Fresh Apple</h1>

          <h2>₹120</h2>

          <p>
            Fresh and juicy apples directly from the farm.
            Rich in vitamins and perfect for a healthy diet.
          </p>

          <button>Add to Cart</button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;