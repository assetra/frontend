import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import styles from "./styles";
import { IoIosArrowRoundForward } from "react-icons/io";

const Exchange = () => {
  return (
    <div className="flex flex-col text-white p-7 font-medium bg-[#1E1F25] ">
      <div className="flex flex-row space-x-10 items-center">
        <h1>Exchange</h1>
        <HiOutlineRefresh />
      </div>
      <div className="flex flex-row items-center text-xs">
        <h1 className="">
          1 <span className={`mr-3 ${styles.h1} text-[0.67rem]`}>BTC</span>
        </h1>
        <IoIosArrowRoundForward />
        <h1 className="ml-3 ">
          53,260.20 <span className={`${styles.h1} text-[0.67rem]`}>USD</span>
        </h1>
      </div>
      <h1 className={`${styles.h1} text-[0.67rem]`}>Get</h1>
      <select
        name="getCurrency"
        id="getCurrency"
        className="bg-[#34384C] border--none rounded-2xl px-4 py-0.5"
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="BCH">BCH</option>
        <option value="XRP">XRP</option>
        <option value="DOGE">DOGE</option>
        <option value="DASH">DASH</option>
        <option value="ZEC">ZEC</option>
      </select>
      <h1 className={`${styles.h1} text-[0.67rem]`}>Pay</h1>
      <select
        name="getCurrency"
        id="getCurrency"
        className="bg-[#34384C] border--none rounded-2xl px-4 py-0.5"
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="BCH">BCH</option>
        <option value="XRP">XRP</option>
        <option value="DOGE">DOGE</option>
        <option value="DASH">DASH</option>
        <option value="ZEC">ZEC</option>
      </select>
      <button className="bg-black rounded-3xl px-5 py-1.5 font-semibold">
        Exchange
      </button>
    </div>
  );
};

export default Exchange;
