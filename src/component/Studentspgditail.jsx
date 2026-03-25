import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Studentspgditail() {
  const students = useSelector((state) => state.student.students);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(students);
  }, [students]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Students & Snacks Details</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">No students registered yet.</p>
      ) : (
        <div className="w-full max-w-3xl flex flex-col gap-6">
          {data.map((student, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-5 flex flex-col gap-4"
            >
              {/* Student Info */}
              <div className="border-b pb-3">
                <p>
                  <strong>Name:</strong> {student.user}
                </p>
                <p>
                  <strong>Email:</strong> {student.email}
                </p>
                <p>
                  <strong>Phone:</strong> {student.phone}
                </p>
                <p>
                  <strong>College ID:</strong> {student.id}
                </p>
                <p>
                  <strong>Referral Code:</strong> {student.referralCode || "N/A"}
                </p>
              </div>

              {/* Snacks / Items Info */}
              {student.items && student.items.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-semibold mb-2">Snacks / Items</h3>
                  <div className="flex flex-col gap-2">
                    {student.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded"
                      >
                        <span className="font-medium">{item.snackname}</span>
                        <span>{item.prductdetail}</span>
                        <span className="text-green-600 font-semibold">
                          ₹{item.payableamount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Studentspgditail;