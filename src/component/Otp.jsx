import React, { useRef, useState } from "react";

function Otp() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  function handleChange(e, index) {
    const value = e.target.value;

    // allow only single digit
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    // backspace -> go to previous
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      
      <h2 className="text-2xl font-bold mb-6">Enter OTP</h2>

      <div className="flex gap-4">
        {otp.map((item, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="text"
            value={item}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            maxLength={1}
            className="w-12 h-12 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>

      <button
        onClick={() => alert(otp.join(""))}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default Otp;