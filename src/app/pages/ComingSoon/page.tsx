"use client";
import { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const targetDate = new Date('2024-12-31');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate.getTime() - currentTime.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <a
          href="mailto:info@company.com"
          className="text-blue-600 hover:underline"
        >
          info@company.com
        </a>
      </header>
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
        <p className="text-xl mb-8">We are working hard to launch our new website.</p>
        <div className="text-3xl font-bold bg-blue-600 text-white py-2 px-4 rounded-md">
          {daysLeft} Days Left
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;