import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Orders() {

  const orders = [
    {
      id: 101,
      date: "23 June 2026",
      total: 350,
      status: "Delivered"
    },
    {
      id: 102,
      date: "25 June 2026",
      total: 620,
      status: "Processing"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="orders-container">

        <h1>My Orders</h1>

        {orders.map((order) => (
          <div className="order-card" key={order.id}>

            <h3>Order ID : {order.id}</h3>

            <p>Date : {order.date}</p>

            <p>Total : ₹{order.total}</p>

            <p>Status : {order.status}</p>

          </div>
        ))}

      </div>

      <Footer />
    </>
  );
}

export default Orders;