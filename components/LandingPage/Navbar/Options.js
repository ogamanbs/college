import React from 'react';
import ConnectOption from './ConnectOption';
import AboutOption from './AboutOption';
import LoginOption from './LoginOption';

export default function Options() {
  return (
    <div className="flex items-center text-sm gap-2">
      <AboutOption />
      <ConnectOption />
      <LoginOption />
    </div>
  )
}
