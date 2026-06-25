import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import apple from "../assets/images/apple.jpg";
import banana from "../assets/images/banana.jpg";
import tomato from "../assets/images/tomato.jpg";
import milk from "../assets/images/milk.jpg";
import potato from "../assets/images/potato.jpg";
import onion from "../assets/images/onion.jpg";
import rice from "../assets/images/rice.jpg";
import bread from "../assets/images/bread.jpg";




function Products() {
  return (
    <>
      <Navbar />

      <div className="products-page">

        <h1>All Products</h1>

        <div className="product-grid">
      
          <ProductCard
            image={apple}
            name="Apple"
            price={120}
          />

          <ProductCard
            image={banana}
            name="Banana"
            price={60}
          />

          <ProductCard
            image={tomato}
            name="Tomato"
            price={40}
          />

          <ProductCard
            image={milk}
            name="Milk"
            price={55}
          />

          <ProductCard
            image={potato}
            name="Potato"
            price={30}
          />

          <ProductCard
            image={onion}
            name="Onion"
            price={25}
          />

          <ProductCard
            image={rice}
            name="Rice"
            price={1200}
          />

          <ProductCard
            image={bread}
            name="Bread"
            price={40}
          />


        </div>

      </div>

      <Footer />
    </>
  );
}

export default Products;