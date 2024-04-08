import React from 'react'
import Image from 'next/image'

export default function DigitalAssets() {
  return (
    <div className='mt-20 p-4'>
      <div>
        <div className='text-[#E5E6ED] font-[700] text-3xl md:text-5xl text-center flex justify-center'>
          <p className='w-[900px] leading-[60px]'>
            THE FUTURE OF EXCHANGING DIGITAL ASSETS.
          </p>
        </div>

        <div className='mt-20 flex justify-center'>
          <div className='w-96 md:w-[1000px] flex flex-wrap gap-10 md:gap-0 justify-center md:justify-evenly'>
            <Image width={45} height={40} src='/assets/x.png' alt='img' />
            <Image width={45} height={40} src='/assets/insta.png' alt='img' />
            <Image
              width={45}
              height={40}
              src='/assets/facebook.png'
              alt='img'
            />
            <Image
              width={45}
              height={40}
              src='/assets/image-11.png'
              alt='img'
            />
            <Image
              width={45}
              height={40}
              src='/assets/whatsapp.png'
              alt='img'
            />
            <Image
              width={45}
              height={40}
              src='/assets/linkedin.png'
              alt='img'
            />
            <Image
              width={45}
              height={40}
              src='/assets/telegram.png'
              alt='img'
            />
            <Image width={45} height={40} src='/assets/reddit.png' alt='img' />
            <Image width={45} height={40} src='/assets/cb.png' alt='img' />
            <Image width={45} height={40} src='/assets/github.png' alt='img' />
            <Image width={45} height={40} src='/assets/email.png' alt='img' />
          </div>
        </div>

        <div className='mt-20 flex justify-center'>
          <div>
            <p className='font-bold text-[#FFFFFF] text-[20px] text-center'>
              STAY UPDATED
            </p>
            <div className='flex justify-center mt-4'>
              <p className='text-[#ffffff] w-[350px] md:w-[532px] text-center'>
                Stay informed about the most recent developments in the
                cryptocurrency sector and maintain a competitive edge in the
                market.
              </p>
            </div>

            <div className='flex justify-center mt-6'>
              <div className='flex md:w-[500px] border-[1px] border-[#000000] rounded-full px-4 py-2 bg-[#34384c]'>
                <input
                  className='w-full outline-none bg-[#34384c] text-[#9ca3af] text-xs md:text-sm'
                  type='text'
                  placeholder='Enter your email address'
                />
                <a href='#'>
                  <button className='text-[#FFFFFF] bg-[#1e68f6] px-12 py-3 rounded-full text-xs md:text-sm'>
                    GetStarted
                  </button>
                </a>
              </div>
            </div>

            <p className='flex justify-center text-center text-white mt-6'>
              Join the decentralized movement with an ever-expanding network of
              connected apps powered by GTX.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
