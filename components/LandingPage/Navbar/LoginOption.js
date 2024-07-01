import Link from 'next/link';
import React from 'react';

export default function LoginOption() {
  return (
    <Link href="/dashboard"><div className='px-5 py-1 bg-lime-300 rounded-full cursor-pointer'><h1 className="capitalize">student</h1></div></Link>
  )
}
