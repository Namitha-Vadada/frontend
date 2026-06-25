import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {

  const user = {
    name: "Namitha",
    email: "namithavadada@gmail.com",
    phone: "6303802039",
    address: ",FF - 3,Noble palace - 5,202 - colony,Kothavalasa,Vizyanagaram(distrit),Visakhapatnam, Andhra Pradesh"
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">

        <h1>My Profile</h1>

        <div className="profile-card">

          <h3>Name</h3>
          <p>{user.name}</p>

          <h3>Email</h3>
          <p>{user.email}</p>

          <h3>Phone</h3>
          <p>{user.phone}</p>

          <h3>Address</h3>
          <p>{user.address}</p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;