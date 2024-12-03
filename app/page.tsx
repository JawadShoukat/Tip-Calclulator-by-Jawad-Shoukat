"use client"
import { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const calculateTip = () => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    return {
      tipAmount,
      totalAmount,
      amountPerPerson,
    };
  };

  const { tipAmount, totalAmount, amountPerPerson } = calculateTip();

  const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(parseFloat(event.target.value));
  };

  const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(parseFloat(event.target.value));
  };

  const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(parseFloat(event.target.value));
  };

  return (

      <div className="bg-sky-300 p-8 w-full h-full flex justify-center items-center">
        <div className="bg-white rounded-2xl p-8 w-96 shadow-2xl border-4 border-green-500">
          <h1 className="text-4xl font-bold text-red-800 mb-6">Tip Calculator</h1>
          <div className="flex flex-col mb-6">
            <label className="text-lg font-bold text-blue-600 mb-2">Bill Amount:</label>
            <input
              type="number"
              value={billAmount}
              onChange={handleBillAmountChange}
              className="p-4 rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-lg font-bold text-teal-600 mb-2">Tip Percentage:</label>
            <input
              type="number"
              value={tipPercentage}
              onChange={handleTipPercentageChange}
              className="p-4 rounded-lg border-2 border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-lg font-bold text-indigo-600 mb-2">Number of People:</label>
            <input
              type="number"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
              className="p-4 rounded-lg border-2 border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
          <div className="flex flex-col mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Results:</h2>
            <div className="flex justify-between mb-2">
              <p className="text-lg font-bold text-pink-600">Tip Amount:</p>
              <p className="text-lg font-bold text-pink-600">${tipAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-lg font-bold text-orange-600">Total Amount:</p>
              <p className="text-lg font-bold text-orange-600">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-lg font-bold text-yellow-600">Amount per Person:</p>
              <p className="text-lg font-bold text-yellow-600">${amountPerPerson.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default TipCalculator;