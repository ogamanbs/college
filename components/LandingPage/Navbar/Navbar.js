import React from 'react';
import Logo from './Logo';
import Options from './Options';

export default function Navbar() {
  return (
    <div className="flex items-center px-20 justify-between py-5">
      <Logo />
      <Options />
    </div>
  )
}
