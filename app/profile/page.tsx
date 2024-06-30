import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: 'Profile',
};

function ProfilePage() {
  return (
    <div className="pl-10 bg-[#000] w-[100svw] h-[100svh] pt-24 overflow-hidden">
      <div className="flex gap-5 w-full h-[10svh] self-start max-md:flex-wrap max-md:pr-5">
        <div className="flex justify-center items-center self-start p-3 w-12 h-10 bg-[linear-gradient(266deg,#246CF9_-0.27%,#1E68F6_-0.26%,#0047D0_98.59%)] rounded-[100px] max-md:w-10 max-md:h-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c8cac97ac43342b1425e2b5b1f19bea35dccd94111d76d3d21de7dcfa213366?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&"
            className="w-6 aspect-square"
            alt="Profile Icon"
          />
        </div>
        <div className="flex flex-col px-3">
          <div className="text-2xl font-bold text-white">
            Profile and Settings
          </div>
          <div className="text-xl text-slate-400">Setup your profile</div>
        </div>
      </div>
      <div className="flex flex-col px-10 py-6 mt-2 w-[75svw] h-[75svh] rounded-xl bg-[#1E1F25] max-md:px-5 max-md:max-w-full">
        <form>
          <div className="grid grid-cols-2 gap-12">
            <div className="w-full">
              <label htmlFor="username" className="block mb-3 text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="rounded-full h-12 pl-6 w-full bg-slate-800 bg-opacity-50"
                placeholder="username"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-3 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="rounded-full h-12 pl-6 w-full bg-slate-800 bg-opacity-50"
                placeholder="youremail@gmail.com"
              />
            </div>
          </div>
          <div className="flex gap-10 pr-20 my-4 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="text-base font-bold leading-6 text-white">
              Crypto addresses
            </div>
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f900bf3b228df81f4b9778d7ea5ec61d1a5f12547178cf376b74050a0987bbd?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&"
                className="shrink-0 aspect-[3.45] w-[84px]"
                alt="Crypto Address 1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/14043070bdcc3949a915eb708a4289d72bd05def6b40d8a87ae2d37e9ec83b10?apiKey=ab7bbdcc4d1c47c6b09773f7758351af&"
                className="shrink-0 w-6 aspect-square"
                alt="Crypto Address 2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 mt-6">
            <div className="w-full">
              <label htmlFor="firstname" className="block mb-3 text-white">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                className="rounded-full h-12 pl-6 w-full bg-slate-800 bg-opacity-50"
                placeholder="First name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastname" className="block mb-3 text-white">
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                className="rounded-full h-12 pl-6 w-full bg-slate-800 bg-opacity-50"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-3">
            <label htmlFor="dob" className="block mb-3 text-white">
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              className="rounded-full h-12 px-6 bg-slate-800 bg-opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 mt-3">
            <label htmlFor="countries" className="block mb-3 text-white">
              Country of residence
            </label>
            <select
              id="countries"
              className="rounded-full h-12 px-6 bg-slate-800 bg-opacity-50 focus:bg-opacity-100"
            >
              <option value="">Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="grid grid-cols-6 mt-3">
            <p className="col-start-1 col-end-4 text-white">
              Closing your account can’t be undone. Please make sure your
              account balance is $0.00 before you begin.
            </p>
            <button className="col-end-7 col-span-1 py-0.5 bg-red-500 text-white rounded-full">
              Delete Account Now
            </button>
          </div>

          <div className="flex justify-end mt-3">
            <button className="px-12 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
