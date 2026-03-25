import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../redux/studentSlice";

function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupdata = useSelector((state) => state.student.students);

  const [form, setForm] = useState({
    user: "",
    email: "",
    phone: "",
    id: "",
  });

  // ===== Generate 4-digit referral code =====
  const generateReferralCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const exists = signupdata.find(
      (item) => item.email === form.email || item.id === form.id
    );

    if (exists) {
      alert("User already exists");
    } else {
      const referralCode = generateReferralCode(); // generate code

      const newUser = {
        ...form,
        referralCode, // add code to student object
      };

      dispatch(addStudent(newUser)); // store in Redux + localStorage
      alert(`Submit Successful\nYour Referral Code: ${referralCode}`);
      navigate("/SnacksPage"); // navigate to next page
    }

    setForm({
      user: "",
      email: "",
      phone: "",
      id: "",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Student-Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={form.user}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="xyz@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="id"
            placeholder="College ID"
            value={form.id}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;