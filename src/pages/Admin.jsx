import React from 'react';
import { Smartphone, Clock, Lock, Unlock } from 'lucide-react';
import { useParental } from '../context/ParentalContext';
const Admin = () => {
  const { childrenData, toggleLock } = useParental();
    return (
        <div className="p-8 bg-slate-50 min-h-screen text-black">
              <h1 className="text-3xl font-black mb-8">Parental Control</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.values(childrenData).map(child => (
                                      <div key={child.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                                                  <div className="flex justify-between items-center mb-6">
                                                                <div><h2 className="text-xl font-bold">{child.name}</h2><div className="text-xs text-slate-400 font-bold uppercase"><Smartphone size={14} className="inline"/> {child.device}</div></div>
                                                                              <button onClick={() => toggleLock(child.id)} className={`px-6 py-2 rounded-xl font-bold ${child.locked ? 'bg-emerald-500' : 'bg-red-500'} text-white`}>{child.locked ? 'Unlock' : 'Lock Device'}</button>
                                                                                          </div>
                                                                                                      <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3 mb-6"><Clock size={16} className="text-indigo-600"/><div><div className="text-[10px] uppercase font-black">Ti
