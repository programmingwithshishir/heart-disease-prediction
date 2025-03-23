import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-white">
      {/* Header Section */}
      <header className="text-center mt-14 mx-5 mb-10 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl text-pink-500 font-bold drop-shadow-lg">Heart Disease Prediction</h1>
        <p className="mt-2 text-base md:text-lg text-black font-light">Empowering early detection with AI-driven insights</p>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-lg text-pink-400">
        <h2 className="text-2xl text-pink-500 font-bold">Your Heart Health Matters</h2>
        <p className="mt-2 mx-5 text-sm text-black md:text-base">
          Our advanced AI model helps predict heart disease risk based on key health metrics. Take control of your
          health with our easy-to-use platform.
        </p>
        <div className="mt-4 flex space-x-4">
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all">
            Log In
          </button>
          <button 
            onClick={() => navigate("/signup")}
            className="px-6 py-3 border border-pink-500 text-pink-500 font-semibold rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all">
            Sign Up
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center">
        <div className="p-6 mx-5 bg-pink-500 text-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg">AI-Powered Predictions</h3>
          <p className="text-sm mt-2">Leverage the power of machine learning for early heart disease detection.</p>
        </div>
        <div className="p-6 mx-5 bg-pink-500 text-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg">Fast & Reliable</h3>
          <p className="text-sm mt-2">Get accurate risk assessment within seconds.</p>
        </div>
        <div className="p-6 mx-5 bg-pink-500 text-white rounded-lg shadow-md">
          <h3 className="font-bold text-lg">User-Friendly Interface</h3>
          <p className="text-sm mt-2">Simple and intuitive design for all users.</p>
        </div>
      </div>
    </div>
  );
}
