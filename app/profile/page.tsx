import { profile } from 'console'
import * as React from 'react'

function profilepage() {
  return (
    <div className='flex flex-col items-center  bg-[#000] max-w-[1200px] ml-20  my-20'>
      <div className='flex gap-5 justify-center self-start max-md:flex-wrap max-md:pr-5'>
        <div className='flex justify-center items-center self-start p-3 w-12 h-12 bg-[linear-gradient(266deg,#246CF9_-0.27%,#1E68F6_-0.26%,#0047D0_98.59%)] rounded-[100px] max-md:w-10 max-md:h-10'>
          <br></br>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4c8cac97ac43342b1425e2b5b1f19bea35dccd94111d76d3d21de7dcfa213366?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
            className='w-6 aspect-square'
          />
        </div>
        <div className='flex flex-col px-5'>
          <div className='text-4xl font-bold leading-10 text-white'>
            Profile and Settings
          </div>
          <div className='mt-3 text-2xl leading-7 text-slate-400'>
            Setup your profile
          </div>
        </div>
      </div>
      <div className='flex flex-col p-10 mt-10 w-full rounded-xl bg-neutral-800 max-md:px-5 max-md:max-w-full'>
        <div className='flex flex-col rounded-xl bg-neutral-800 max-md:max-w-full'>
          <div className='flex gap-5 pr-20 max-md:flex-wrap max-md:pr-5'>
            <div className='flex gap-4'>
              <img
                loading='lazy'
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17dac3bab640cafe3c50b7f58c8d8815f46b6640768deff63f8402ec339340cd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
                className='shrink-0 w-16 rounded-full aspect-square'
              />
              <div className='flex flex-col my-auto text-left'>
                <div className='text-xl font-bold leading-7 text-white max-md:max-w-full max-md:whitespace-nowrap'>
                  Your Name
                </div>
                <div className='mt-1 text-sm leading-6 text-slate-500 max-md:max-w-full max-md:whitespace-nowrap'>
                  youremail@gmail.com
                </div>
              </div>
            </div>
            <div className='flex gap-4 my-auto text-sm leading-6 text-white max-md:flex-wrap'>
              <div className='justify-center px-6 py-3 font-bold bg-[linear-gradient(266deg,#246CF9_-0.27%,#1E68F6_-0.26%,#0047D0_98.59%)] rounded-[100px] max-md:px-5 max-md:max-w-full'>
                Change Photo Profile
              </div>
              <div className='justify-center px-6 py-3 whitespace-nowrap border border-white border-solid rounded-[100px] max-md:px-5 max-md:max-w-full'>
                Delete
              </div>
            </div>
          </div>
          <div className='flex gap-5 justify-center mt-6 text-base leading-6 whitespace-nowrap max-md:flex-wrap max-md:gap-3'>
            <div className='flex flex-col flex-1 max-md:max-w-full '>
              <div className='font-bold text-white max-md:max-w-full '>
                Username
              </div>
              <div className='justify-center items-start px-7 py-4 mt-4 bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:px-5 max-md:max-w-full '>
                username
              </div>
            </div>
            <div className='flex flex-col flex-1 max-md:max-w-full '>
              <div className='font-bold text-white max-md:max-w-full'>
                Email
              </div>
              <div className='justify-center items-start px-7 py-4 mt-4 bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:px-5 max-md:max-w-full'>
                youremail@gmail.com
              </div>
            </div>
          </div>
          <div className='flex gap-5 pr-20 mt-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
            <div className='text-base font-bold leading-6 text-white'>
              Crypto addresses
            </div>
            <div className='flex gap-2'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/1f900bf3b228df81f4b9778d7ea5ec61d1a5f12547178cf376b74050a0987bbd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
                className='shrink-0 aspect-[3.45] w-[84px]'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/14043070bdcc3949a915eb708a4289d72bd05def6b40d8a87ae2d37e9ec83b10?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
                className='shrink-0 w-6 aspect-square'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-6 text-base leading-6 rounded-xl bg-neutral-800 max-md:max-w-full'>
          <div className='flex gap-5 justify-center max-md:flex-wrap'>
            <div className='flex flex-col flex-1 max-md:max-w-full'>
              <div className='font-bold text-white max-md:max-w-full'>
                First name
              </div>
              <div className='justify-center items-start px-7 py-4 mt-4 whitespace-nowrap bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:px-5 max-md:max-w-full'>
                FirstNameHere
              </div>
            </div>
            <div className='flex flex-col flex-1 max-md:max-w-full'>
              <div className='font-bold text-white max-md:max-w-full'>
                Last name
              </div>
              <div className='justify-center items-start px-7 py-4 mt-4 whitespace-nowrap bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:px-5 max-md:max-w-full'>
                LastNameHere
              </div>
            </div>
          </div>
          <div className='mt-6 font-bold text-white max-md:max-w-full'>
            Date of birth
          </div>
          <div className='flex gap-2.5 px-7 py-4 mt-4 whitespace-nowrap bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:flex-wrap max-md:px-5'>
            <div className='flex-1 max-md:max-w-full'>12/05/1995</div>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/4f31aa60d56bb3998fa6d775d32e515a4485ca32ee503c757203b35d53246304?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
              className='shrink-0 my-auto aspect-[0.95] w-[19px]'
            />
          </div>
          <div className='mt-6 font-bold text-white max-md:max-w-full'>
            Country of residence
          </div>
          <div className='flex gap-2.5 px-7 py-4 mt-4 whitespace-nowrap bg-slate-800 bg-opacity-50 rounded-[100px] text-slate-400 max-md:flex-wrap max-md:px-5'>
            <div className='flex-1 max-md:max-w-full'>Netherlands</div>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/37d1220e0b76441bfeeb77b057c6b45689a751094079e17f7976347be29a9e27?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&'
              className='shrink-0 my-auto w-5 aspect-square'
            />
          </div>
        </div>
        <div className='flex gap-5 justify-between mt-6 rounded-xl bg-neutral-800 max-md:flex-wrap max-md:max-w-full max-md:px-5'>
          <div className='flex flex-col text-base max-md:max-w-full max-md:px-5'>
            <div className='font-bold text-white leading-[150%] max-md:max-w-full max-md:px-5'>
              Delete account
            </div>
            <div className='mt-2 leading-6 text-slate-400 max-md:max-w-full max-md:px-5'>
              Closing your account can’t be undone. Please make sure your
              account balance is $0.00 before you begin.
            </div>
          </div>
          <div className='justify-center px-6 py-3 my-auto text-sm font-bold leading-6 text-white bg-rose-600 rounded-[100px] max-md:px-5 max-md:max-w-full'>
            Delete Account Now
          </div>
        </div>
        <div className='justify-center self-end px-16 py-5 mt-6 text-lg font-bold leading-7 text-white bg-[linear-gradient(266deg,#246CF9_-0.27%,#1E68F6_-0.26%,#0047D0_98.59%)] rounded-[100px] max-md:px-8 max-md:max-w-full'>
          Save Changes
        </div>
      </div>
    </div>
  )
}
export default profilepage
