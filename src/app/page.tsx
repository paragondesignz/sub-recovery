"use client";
import React, { useState } from 'react';
import { CreditCard, AlertTriangle, RefreshCcw, Search, ExternalLink } from 'lucide-react';

export default function SubRecovery() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16 border-b border-zinc-900 pb-8">
          <div className="flex items-center gap-3">
            <RefreshCcw className="w-8 h-8 text-orange-500 animate-spin-slow" />
            <h1 className="text-2xl font-black tracking-tighter">RECOVER.IO</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Recovered: $1,245.00
            </span>
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-bold">Connect Stripe</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <MetricsCard title="Failed Payments" value="24" status="urgent" />
           <MetricsCard title="Recovered Today" value="$145.20" status="good" />
           <MetricsCard title="Pending Churn" value="12" status="warn" />
        </div>

        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="p-8 flex justify-between items-center border-b border-zinc-800 bg-zinc-900/30">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-zinc-500" />
              Failed Subscriptions
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" />
              <input type="text" className="bg-black border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Search customer..." />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase font-bold text-zinc-500 tracking-widest bg-zinc-900/50">
                  <th className="px-8 py-4">Customer</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Amount</th>
                  <th className="px-8 py-4">Last Attempt</th>
                  <th className="px-8 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <TableRow name="Acme Corp" email="billing@acme.com" status="Retrying" amount="$199.00" date="2 hours ago" />
                <TableRow name="Mark Steven" email="mark@paragon.co.nz" status="Failed" amount="$49.00" date="1 day ago" urgent />
                <TableRow name="Global Tech" email="support@global.tech" status="Retrying" amount="$1,200.00" date="3 hours ago" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricsCard({ title, value, status }: any) {
  const statusColors: any = {
    urgent: 'text-red-500',
    good: 'text-emerald-500',
    warn: 'text-orange-500'
  };
  return (
    <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-xl">
      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{title}</p>
      <div className={`text-4xl font-black ${statusColors[status]}`}>{value}</div>
    </div>
  );
}

function TableRow({ name, email, status, amount, date, urgent }: any) {
  return (
    <tr className="hover:bg-zinc-800/20 transition-colors group">
      <td className="px-8 py-6">
        <div className="font-bold text-zinc-200">{name}</div>
        <div className="text-xs text-zinc-500">{email}</div>
      </td>
      <td className="px-8 py-6">
        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase border ${urgent ? 'text-red-400 bg-red-400/5 border-red-400/20' : 'text-orange-400 bg-orange-400/5 border-orange-400/20'}`}>
          {status}
        </span>
      </td>
      <td className="px-8 py-6 font-mono text-zinc-300">{amount}</td>
      <td className="px-8 py-6 text-sm text-zinc-500">{date}</td>
      <td className="px-8 py-6 text-right">
        <button className="text-zinc-500 hover:text-white transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
