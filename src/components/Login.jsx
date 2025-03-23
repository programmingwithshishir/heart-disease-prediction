import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const [userType, setUserType] = useState("doctor");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log(`${userType} login:`, data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <div className="bg-white p-8 mx-5 shadow-2xl rounded-2xl w-96 transition-all duration-300 ease-in-out transform">
        <div className="flex mb-6 bg-gray-200 p-1 rounded-lg">
          <button
            className={`flex-1 cursor-pointer py-2 text-sm font-semibold text-center rounded-lg transition-all duration-300 ${userType === "doctor" ? "bg-pink-400 text-black shadow-md" : "text-gray-500 hover:bg-gray-300"}`}
            onClick={() => setUserType("doctor")}
          >
            Doctor
          </button>
          <button
            className={`flex-1 cursor-pointer py-2 text-sm font-semibold text-center rounded-lg transition-all duration-300 ${userType === "patient" ? "bg-pink-400 text-black shadow-md" : "text-gray-500 hover:bg-gray-300"}`}
            onClick={() => setUserType("patient")}
          >
            Patient
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 animate-fadeIn">
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-400 focus:outline-none shadow-sm transition-all duration-200"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-pink-400 focus:outline-none shadow-sm transition-all duration-200"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-pink-400 font-semibold text-black py-2 rounded-lg hover:bg-pink-400 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">Don't have an account?</p>
          <button className="text-blue-500 hover:underline text-sm mt-1">
            Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
}
