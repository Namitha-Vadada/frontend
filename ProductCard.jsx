function ProductCard({ image, name, price, addToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button
        onClick={() =>
          addToCart({
            id: Date.now(),
            image,
            name,
            price,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;