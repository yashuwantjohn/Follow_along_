// Cart.jsx
import React, { useState, useEffect } from 'react';
import CartProduct from '../components/auth/CartProduct';
import Nav from '../components/auth/nav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch(`http://localhost:8000/api/v2/product/cartproducts?email=${'yash@gmail.com'}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.cart.map(product => ({ quantity: product['quantity'], ...product['productId'] })));
        console.log("Products fetched:", data.cart);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  console.log("Products:", products);

  const handlePlaceOrder = () => {
    navigate('/select-address'); // Navigate to the Select Address page
  };

  return (
    <div className='w-full h-screen'>
      <Nav />
      <div className='w-full h-full justify-center items-center flex'>
        <div className='w-full md:w-4/5 lg:w-4/6 2xl:w-2/3 h-full border-l border-r border-neutral-300 flex flex-col'>
          <div className='w-full h-16 flex items-center justify-center'>
            <h1 className='text-2xl font-semibold'>Cart</h1>
          </div>
          <div className='w-full flex-grow overflow-auto px-3 py-2 gap-y-2'>
            {products.map(product => (
              <CartProduct key={product._id} {...product} />
            ))}
          </div>
          {/* Place Order Button */}
          <div className='w-full p-4 flex justify-end'>
            <button
              onClick={handlePlaceOrder}
              className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;