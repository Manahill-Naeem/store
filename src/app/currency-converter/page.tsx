// src/app/currency-converter/page.tsx
'use client'; // Client-side interactivity ke liye

import { useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Currency Converter - Mobile Store',
  description: 'Convert prices between different currencies instantly.',
};

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR'); // Pakistan Rupees
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Dummy conversion rates (later, we'll fetch from a real API)
  const rates: { [key: string]: { [key: string]: number } } = {
    USD: { USD: 1, PKR: 280, EUR: 0.92, GBP: 0.79 },
    PKR: { USD: 0.0036, PKR: 1, EUR: 0.0033, GBP: 0.0028 },
    EUR: { USD: 1.08, PKR: 304, EUR: 1, GBP: 0.86 },
    GBP: { USD: 1.27, PKR: 358, EUR: 1.16, GBP: 1 },
  };

  const handleConvert = () => {
    setError(null);
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }
    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
      const rate = rates[fromCurrency][toCurrency];
      setConvertedAmount(amount * rate);
    } else {
      setError('Conversion rate not available for selected currencies.');
      setConvertedAmount(null);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Currency Converter</h1>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            min="0"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor="fromCurrency" className="block text-gray-700 text-sm font-bold mb-2">
              From:
            </label>
            <select
              id="fromCurrency"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>

          <div className="flex items-center justify-center mt-6 sm:mt-0">
            <span className="text-3xl font-bold text-gray-600">&harr;</span> {/* Bi-directional arrow */}
          </div>

          <div className="flex-1">
            <label htmlFor="toCurrency" className="block text-gray-700 text-sm font-bold mb-2">
              To:
            </label>
            <select
              id="toCurrency"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Convert
        </button>

        {convertedAmount !== null && (
          <div className="mt-8 text-center bg-gray-100 p-4 rounded-md">
            <p className="text-xl text-gray-800">
              {amount} {fromCurrency} =
            </p>
            <p className="text-3xl font-bold text-green-700 mt-2">
              {convertedAmount.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-center text-red-600">
            <p className="text-lg">{error}</p>
          </div>
        )}
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="inline-block text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}