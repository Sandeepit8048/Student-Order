import React from "react";
import { useSelector } from "react-redux";

function StudentPage() {

  const cartItems = useSelector((state) => state.student.items);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white p-3 rounded shadow"
            >
              <span className="font-medium">{item.snackname}</span>
              <span className="text-green-600 font-semibold">
                ₹{item.payableamount}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentPage;