import React from 'react';
import { useParental } from '../context/ParentalContext';
import { useParams } from 'react-router-dom';
import { Lock, Clock } from 'lucide-react';
const Child = () => {
    const { childId } = useParams();
    const { childrenData } = useParental();
    const child = childrenData[childId];
    if (!child) return <div>Child not found</div>div>;
    if (child.locked) {
      return (
              <div className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center text-white p-8 text-center z-[9999]">
                      <Lock size={120} className="mb-8" />
                      <h1 className="text-4xl font-black mb-4 uppercase">YOUR PHONE IS LOCKED</h1>
                      <p className="text</div>
