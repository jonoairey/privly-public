'use client';

import { useState } from 'react';
import { PLAN } from '@/lib/constants';

export default function RoiCalculator() {
  const [monthlyEarnings, setMonthlyEarnings] = useState(5000);

  const estimatedMonthlyLoss = monthlyEarnings * 0.15;
  const monthlyLossAfterPrivly = monthlyEarnings * 0.05;
  const monthlyRecovery = estimatedMonthlyLoss - monthlyLossAfterPrivly;
  const annualSavings = monthlyRecovery * 12;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 p-8 sm:p-12">
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-300 mb-3">
          Monthly earnings
        </label>
        <div className="flex items-center gap-2">
          <span className="text-2xl text-gray-400">$</span>
          <input
            type="number"
            value={monthlyEarnings}
            onChange={(e) => setMonthlyEarnings(Math.max(0, parseInt(e.target.value) || 0))}
            className="flex-1 bg-gray-950 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-2xl font-semibold focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
      </div>

      <div className="space-y-6 mb-8 pt-8 border-t border-purple-500/20">
        <div>
          <p className="text-gray-400 mb-2">Estimated monthly loss to leaks</p>
          <p className="text-3xl font-bold text-pink-400">
            ${estimatedMonthlyLoss.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">After 3 months with Privly</p>
          <p className="text-3xl font-bold text-emerald-400">
            ${monthlyLossAfterPrivly.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Annual savings</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ${annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      <div className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg">
        <p className="text-gray-200 font-semibold">
          Privly pays for itself in the first week.
        </p>
      </div>
    </div>
  );
}
