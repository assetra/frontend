'use client'
import { Input } from 'postcss'
import React, { useContext } from 'react'
const Homepage = () => {
  return (
    <div className='flex flex-col w-screen px-7 bg-[#000] h-screen text-white'>
      <div className='flex flex-col items-center justify-center w-full mt-36 text-5xl font-bold max-w-[800px] mx-auto text-center leading-[60px]'>
        THE FUTURE OF EXCHANGING DIGITAL ASSETS.
      </div>
      <h1 className='text-center text-lg font-bold mt-36'> STAY UPDATED</h1>
      <p className='text-center max-w-[500px] mx-auto text-sm mt-4'>
        Stay informed about the most recent developments in the cryptocurrency
        sector and maintain a competitive edge in the market.
      </p>
      <div className='flex gap-4 mx-auto border-2 border-slate-500 px-4 py-2 mt-10 rounded-[100px] bg-[#141212]'>
        <input
          className='bg-transparent h-full outline-none'
          placeholder='Enter your email address'
        />
        <button className='bg-[#1E68F6] text-white p-2 rounded-[100px]'>
          Get Started
        </button>
      </div>
      <p className='text-center text-sm mt-6'>
        Join the decentralized movement with an ever-expanding network of
        connected apps powered by GTX.
      </p>
      <div className='bg-gradient-to-r from-[#FF0000] via-[#FFE500] via-[#00FF0A]  to-[#0500FF] h-[100px] w-[96vw] text-[#FF0000] p-2  my-20  realtive left-[32px]'>
        .
      </div>
      <div>
        <p>ABOUT GTX</p>
        <h3>Unveiling Our Journey, Vision, and Commitment</h3>
      </div>
      <div>
        <div>
          <h3>WHAT IS GTX?</h3>
          <p>
            "GTX simplifies crypto for all. Our user-friendly ecosystem eases
            blockchain interactions, catering to novices and experts alike.
            We're dedicated to creating intuitive tools, making crypto
            investment accessible and efficient."
          </p>
        </div>
        <div>
          <h3>OUR MISSION</h3>
          <p>
            Our goal is to empower people to participate in the exciting world
            of cryptocurrencies with confidence and ease, and to help bridge the
            gap between traditional finance and the emerging digital economy.
          </p>
        </div>
      </div>
      <div>
        <h4>WHY GTX?</h4>
        <h2>Why Choose GTX for Your Crypto Journey?</h2>
      </div>
    </div>
  )
}

export default Homepage
