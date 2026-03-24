import React, { useEffect, useState } from "react";

function SnacksPage() {
  const [cartItems, setCartItems] = useState([]); 
  const [snacks, setSnacks] = useState([]); 

  // Fetch snacks from backend
  async function datafetch() {
    try {
      const res = await fetch("http://localhost:3000/student");
      const data = await res.json();
      setSnacks(data);
    } catch (error) {
      console.error("Failed to fetch snacks:", error);
    }
  }

  useEffect(() => {
    datafetch();
  }, []);

  const addToCart = (snack) => {
    setCartItems((prev) => [...prev, snack]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Snacks Menu</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cart ({cartItems.length})</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-2">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white p-2 rounded shadow"
              >
                <span>{item.snackname}</span>
                <span>${item.payableamount}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {snacks.map((item, id) => (
          <div
            key={id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold">{item.snackname}</h2>
            <p>Quantity: {item.quantityitem}</p>
            <p>Detail: {item.prductdetail}</p>
            <p className="font-semibold mt-2">Price: ${item.payableamount}</p>

            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnacksPage;