import React from "react";
import { useRouter } from "next/navigation";

import TransactionListIcon from "../icons/portfolio/TransactionListIcon";
import AddTransactionIcon from "../icons/portfolio/AddTransactionIcon";
import FavoriteIcon from "../icons/portfolio/FavoriteIcon";
import SettingIcon from "../icons/portfolio/SettingIcon";
import CoinIcon from "../icons/portfolio/CoinIcon";

interface IMenuBarProps {
  active: number;
  settingOpen: boolean;
  setSettingOpen: (_: boolean) => void;
}

const MenuBar = ({ active, settingOpen, setSettingOpen }: IMenuBarProps) => {
  const router = useRouter();
  const handleClick = (page: number) => {
    if (page === 1) router.push("/mobile/coin/Line");
    if (page === 2) router.push("/mobile/transaction/list");
    if (page === 4) router.push("/mobile/favorite");
    if (page === 5) router.push("/mobile/setting");
  };

  return (
    <div className="control-wrapper bg-[#0e0f18] pt-2 flex items-center justify-evenly h-[110px] fixed left-0 bottom-0 w-full">
      <CoinIcon isActive={active === 1} onClick={() => handleClick(1)} />
      <TransactionListIcon
        isActive={active === 2}
        onClick={() => handleClick(2)}
      />
      <AddTransactionIcon
        isActive={settingOpen}
        onClick={() => setSettingOpen(!settingOpen)}
      />

      <FavoriteIcon isActive={active === 4} onClick={() => handleClick(4)} />
      <SettingIcon isActive={active === 5} onClick={() => handleClick(5)} />
    </div>
  );
};

export default MenuBar;
