import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CurrencyExchangeRate() {
  const [symbols, setSymbols] = useState([]);
  const [base, setBase] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [target, setTarget] = useState("INR");
  const [result, setResult] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.currencylayer.com/list?access_key=37786af57ca8d7b1b45ddc6de9edad70`
      )
      .then((res) => {
        setSymbols(res.data.currencies);
        console.log(res.data);
      });
  }, [base, target]);

  const handleExchange = () => {
    axios
      .get(
        `https://api.currencylayer.com/convert?access_key=37786af57ca8d7b1b45ddc6de9edad70&from=${base}&to=${target}&amount=${amount}&format=1`
      )
      .then((res) => {
        setResult(res.data.result);
      });
  };

  useEffect(() => {
    handleExchange();
    setShow(false);
  }, [target]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Currency Exchange Rate
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Convert currencies in real-time with accurate exchange rates
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
                    From
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <div className="relative">
                      <select
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        onChange={(e) => setBase(e.target.value)}
                      >
                        <option value={"--Select--"} disabled selected>
                          --Select--
                        </option>
                        {Object.entries(symbols).map(([code, name]) => (
                          <option value={code} key={code}>
                            {code} : {name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder={`Enter amount in ${base}`}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">{base}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                    To
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <div className="relative">
                      <select
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
                        onChange={(e) => setTarget(e.target.value)}
                      >
                        <option value={"--Select--"} disabled selected>
                          --Select--
                        </option>
                        {Object.entries(symbols).map(([code, name]) => (
                          <option value={code} key={code}>
                            {code} : {name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end h-[60px]">
                    <button
                      onClick={handleExchange}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Calculate Exchange Rate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {show && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-1">
                    <div className="bg-white rounded-lg py-6 px-8 shadow-sm">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Conversion Result
                      </h2>
                      <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                        {amount} {base} = {result} {target}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Real-time exchange rates provided by Afnan</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Currency Conversion App
          </p>
        </div>
      </div>
    </div>
  );
}
