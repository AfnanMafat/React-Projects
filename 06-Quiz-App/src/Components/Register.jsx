import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    axios.post(`http://localhost:8080/InsertUser`, { name, email, password })
      .catch((err) => {
        console.log(err);
        alert("User Already Exists");
        navigate("/Register");
      })

    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 relative">
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-yellow-400/30"></div>
            <div className="absolute bottom-2 left-4 w-10 h-10 rounded-full bg-pink-500/30"></div>
            <h1 className="text-3xl font-bold text-center text-white relative z-10">
              Create Account
            </h1>
            <p className="text-white/80 text-center mt-2 relative z-10">
              Join our quiz community today
            </p>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  type='text'
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder='Enter Your Name'
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type='email'
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder='Enter Your Email'
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type='password'
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder='Enter Your Password'
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button
              onClick={handleSignUp}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
            >
              Sign Up
            </button>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => navigate("/")}
                className="text-cyan-300 hover:text-yellow-300 font-medium underline transition-colors"
              >
                Already have an account? Login here
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-center text-white/80 text-sm">
            <p>Prepare for Apptitude</p>
          </div>
        </div>
        
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}