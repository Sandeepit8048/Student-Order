import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Studentspgditail() {
  const students = useSelector((state) => state.student.students);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(students);
  }, [students]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Students & Snacks Details
      </h1>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center">No students registered yet.</p>
      ) : (
        <div className="w-full max-w-5xl flex flex-col gap-6">
          {data.map((student, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-4 sm:gap-6"
            >
              {/* Student Info */}
              <div className="border-b pb-3 sm:pb-4">
                <p className="text-sm sm:text-base">
                  <strong>Name:</strong> {student.user}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Email:</strong> {student.email}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Phone:</strong> {student.phone}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>College ID:</strong> {student.id}
                </p>
                <p className="text-sm sm:text-base">
                  <strong>Referral Code:</strong> {student.referralCode || "N/A"}
                </p>
              </div>

              {/* Snacks / Items Info */}
              {student.items && student.items.length > 0 && (
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">
                    Snacks / Items
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm sm:text-base border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left">Snack Name</th>
                          <th className="px-3 py-2 text-left">Product Detail</th>
                          <th className="px-3 py-2 text-right">Payable Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {student.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className="border-t border-gray-200 hover:bg-gray-50"
                          >
                            <td className="px-3 py-2">{item.snackname}</td>
                            <td className="px-3 py-2">{item.prductdetail}</td>
                            <td className="px-3 py-2 text-right text-green-600 font-semibold">
                              ₹{item.payableamount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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