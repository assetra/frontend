import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface ITransactionInfo {
  title: string;
  method: boolean;
  amount: number;
  date: string;
  price: number;
  pair: string;
  fee?: number;
  worth?: number;
}
const TransactionInfo = ({
  title,
  method,
  amount,
  date,
  price,
  pair,
  fee,
  worth,
}: ITransactionInfo) => {
  const router = useRouter();
  console.log(title);
  return (
    <div className="transaction-info-wrapper">
      <div
        className="info-header flex justify-between items-center pr-2"
        onClick={() => router.push(`/mobile/transaction/detail/${title}`)}
      >
        <div className="title flex gap-x-4 items-center">
          <div className="icon-wrapper  w-9 h-9 bg-[#1B1C24] rounded-[50%] flex justify-center items-center">
            {method ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#FC3044" />
                <path
                  d="M6.38672 11.5918C6.43945 13.1797 7.73438 14.1465 9.76758 14.1465C11.8652 14.1465 13.1953 13.1094 13.1953 11.4688C13.1953 10.1797 12.457 9.45312 10.7637 9.08984L9.73828 8.87305C8.76562 8.65039 8.35547 8.35742 8.35547 7.83594C8.35547 7.20898 8.94141 6.79297 9.81445 6.79297C10.6992 6.79297 11.3262 7.22656 11.3848 7.94141H13.043C13.0137 6.41211 11.7773 5.39844 9.80859 5.39844C7.92188 5.39844 6.57422 6.42969 6.57422 7.98828C6.57422 9.22461 7.3418 10.0156 8.90039 10.3496L10.002 10.5898C11.0215 10.8184 11.4258 11.123 11.4258 11.6738C11.4258 12.2949 10.7812 12.7461 9.83789 12.7461C8.90039 12.7461 8.17383 12.2891 8.0918 11.5918H6.38672Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#32CC86" />
                <path
                  d="M11.4473 14C13.252 14 14.3711 13.0684 14.3711 11.5801C14.3711 10.4609 13.5273 9.62305 12.3789 9.53516V9.48828C13.2754 9.35352 13.9668 8.58008 13.9668 7.6543C13.9668 6.35938 12.9707 5.54492 11.3828 5.54492H7.70312V14H11.4473ZM9.47266 6.86328H10.9258C11.752 6.86328 12.2266 7.25 12.2266 7.92969C12.2266 8.64453 11.6875 9.06055 10.7441 9.06055H9.47266V6.86328ZM9.47266 12.6816V10.2266H10.9551C11.998 10.2266 12.5664 10.6484 12.5664 11.4395C12.5664 12.248 12.0156 12.6816 10.9961 12.6816H9.47266Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <h3 className="title font-bold text-sm text-white">#{title}</h3>
        </div>
        <div className="detail-button">
          <FaChevronRight className="text-[#666666] w-[6px] h-3" />
        </div>
      </div>

      <div className="detail-content grid grid-cols-2 pl-[52px] py-[26px] gap-y-[26px]">
        <div className="detail-item flex flex-col gap-y-1">
          <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
            Amount {method ? "Sold" : "Bought"}
          </h4>

          <p className="info-content text-white text-sm font-bold">
            {amount} BTC
          </p>
        </div>
        <div className="detail-item flex flex-col gap-y-1">
          <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
            Transaction Date
          </h4>

          <p className="info-content text-white text-sm font-bold">{date}</p>
        </div>

        <div className="detail-item flex flex-col gap-y-1">
          <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
            ETH {method ? "Sell" : "Buy"} Price
          </h4>

          <p className="info-content text-white text-sm font-bold">${price}</p>
        </div>
        <div className="detail-item flex flex-col gap-y-1">
          <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
            Trading Pair
          </h4>

          <p className="info-content text-white text-sm font-bold">{pair}</p>
        </div>

        {!method && (
          <div className="detail-item flex flex-col gap-y-1">
            <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
              Cost (+fee)
            </h4>

            <p className="info-content text-white text-sm font-bold">${fee}</p>
          </div>
        )}
        {!method && (
          <div className="detail-item flex flex-col gap-y-1">
            <h4 className="info-title text-[12px]/[14.32px] text-white/[.5] font-normal">
              Worth
            </h4>

            <p className="info-content text-white text-sm font-bold">
              ${worth}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionInfo;
