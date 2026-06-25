import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

  const [order, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery"
  });

  const handleChange = (e) => {

    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });

  };

  const placeOrder = (e) => {

    e.preventDefault();

    console.log(order);

    alert("Order Placed Successfully!");

  };

  return (
  <>
    <Navbar />

    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-box">
        <form className="checkout-form" onSubmit={placeOrder}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={order.name}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={order.phone}
            onChange={handleChange}
            required
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            placeholder="Enter your delivery address"
            value={order.address}
            onChange={handleChange}
            required
          />

          <label>Payment Method</label>
          <select
            name="payment"
            value={order.payment}
            onChange={handleChange}
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>

          <div className="checkout-summary">
            <h3>Order Summary</h3>

            <p>
              <span>Subtotal</span>
              <span>₹450</span>
            </p>

            <p>
              <span>Delivery Charges</span>
              <span>₹50</span>
            </p>

            <p className="checkout-total">
              <span>Total</span>
              <span>₹500</span>
            </p>
          </div>

          <button
            type="submit"
            className="place-order-btn"
          >
            Place Order
          </button>

        </form>
      </div>
    </div>

    <Footer />
  </>
  );
}
export default Checkout;