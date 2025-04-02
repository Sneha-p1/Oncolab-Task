import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() && password) {
      localStorage.setItem("username", username);
      navigate("/home");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/banner-background-scientist-research-medical-science-laboratory-medicine-technology-with-biology-chemistry-pharmaceutical-clinic-doctor-work-test-coronavirus-covid-19-vaccine_33755-9714.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/50"></div>

      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-200 z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-800">
            Oncolab Diagnostics
          </h1>
          <p className="text-xl text-gray-600 mt-1">Sign on and stay</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Sign In
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-gray-700 font-medium">Password</label>
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
