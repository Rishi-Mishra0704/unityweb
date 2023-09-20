import React from 'react';

const Splash = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center shadow-lg" // Add shadow-lg here
      style={{
        background: 'linear-gradient(45deg, #ea3883, #abdafb, #1e2ae6)',
      }}
    >
      <div className="text-white p-12 text-center mb-6 shadow-lg">
        <h1 className="text-5xl font-bold mb-2 ">
          Welcome to Our Social Media Platform
        </h1>
        <p className="text-2xl">
          Where you can make posts, like and comment, and add friends.
        </p>
      </div>

      <div className="space-x-4">
        <a
          href="http://127.0.0.1:8000/"
          className="bg-[#ea3883] hover:bg-[#ee1a72] text-white text-xl font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Signup
        </a>
        <a
          href="http://127.0.0.1:8000/login"
          className="bg-[#535cdf] hover:bg-[#1e2ae6] text-white text-xl font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Splash;
