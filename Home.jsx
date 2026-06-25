import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import apple from "../assets/images/apple.jpg";
import banana from "../assets/images/banana.jpg";
import tomato from "../assets/images/tomato.jpg";
import milk from "../assets/images/milk.jpg";
import potato from "../assets/images/potato.jpg";
import onion from "../assets/images/onion.jpg";
import rice from "../assets/images/rice.jpg";
import bread from "../assets/images/bread.jpg";

import fruits from "../assets/category/fruits.png";
import vegetables from "../assets/category/vegetables.png";
import dairy from "../assets/category/dairy.png";
import bakery from "../assets/category/bakery.png";
import snacks from "../assets/category/snacks.png";
import beverages from "../assets/category/beverages.png";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome to FreshMart</h1>
        <p>Fresh Groceries Delivered to Your Doorstep</p>

        <SearchBar />
      </section>

      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-container">

          <CategoryCard
            image={fruits}
            title="Fruits"
          />

          <CategoryCard
            image={vegetables}
            title="Vegetables"
          />

          <CategoryCard
            image={dairy}
            title="Dairy"
          />

        </div>

      </section>

      <section className="featured-products">

        <h2>Featured Products</h2>

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
          
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;