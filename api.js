// Base URL of your backend server
const BASE_URL = "http://localhost:5001";

// ===========================
// PRODUCTS
// ===========================

// Get all products
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
};

// Get single product
export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};

// ===========================
// USER
// ===========================

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  return response.json();
};

// ===========================
// ORDERS
// ===========================

// Place Order
export const placeOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  return response.json();
};

// Get Orders
export const getOrders = async () => {
  const response = await fetch(`${BASE_URL}/orders`);
  return response.json();
};