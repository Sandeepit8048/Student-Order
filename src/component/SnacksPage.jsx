import React, { useEffect, useState } from "react";
import { addToCart } from "../redux/studentSlice";
import { useDispatch } from "react-redux";

function SnacksPage() {
  const [snacks, setSnacks] = useState([]);
  
  const dispatch = useDispatch()

  // const selector = useSelector((state)=>state.studentSlice.items)

  // console.log(selector.length);

  async function datafetch() {
    try {
      const res = await fetch("https://student-order-e089.onrender.com/student");
      const data = await res.json();
      setSnacks(data);
    } catch (error) {
      console.error("Failed to fetch snacks:", error);
    }
  }

  useEffect(() => {
    datafetch();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Snacks Menu</h1>
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
              onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SnacksPage;