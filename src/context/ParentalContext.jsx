import React, { createContext, useState, useContext, useEffect } from 'react';

const ParentalContext = createContext();

export const ParentalProvider = ({ children }) => {
    // Try to load from localStorage first
    const loadInitialState = () => {
          try {
                  const saved = localStorage.getItem('parental_data');
                  if (saved) {
                            console.log('ParentalContext: Loading state from localStorage');
                            return JSON.parse(saved);
                  }
          } catch (e) {
                  console.error('Error loading initial state:', e);
          }

          // Initial/Default data
          return {
                  aryan: {
                            id: 'aryan',
                            name: 'Aryan',
                            device: 'Realme C35',
                            timeLeft: '01:45:00',
                            locked: false,
                            apps: [
                              { id: 'youtube', name: 'YouTube Kids', status: 'Allowed', icon: TV', reason: 'Educational Content' },
                              { id: 'roblox', name: 'Roblox', status: 'Blocked', icon: 'GA', reason: 'Night Time Limit' },
                              { id: 'math', name: 'Khan Academy', status: 'Allowed', icon: 'BK', reason: 'Math Practice' }
                                      ],
                            timeRequests: []
                  }
                                };
    };
            
    const [childrenData, setChildrenData] = useState(loadInitialState);
  
    useEffect(() => {
          localStorage.setItem('parental_data','
                    
