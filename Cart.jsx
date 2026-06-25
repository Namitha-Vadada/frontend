import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple",
      price: 120,
      quantity: 1
    },
    {
      id: 2,
      name: "Milk",
      price: 55,
      quantity: 1
    }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <>
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>

                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div>

                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                </div>

                <h4>
                  ₹{item.price * item.quantity}
                </h4>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>

              </div>
            ))}

            <hr />

            <h2>Total : ₹{total}</h2>

          </>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Cart;