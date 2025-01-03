"use client";
import { useEffect } from "react";

const Scroller: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerItems = scroller.querySelector(".scroller-items");
        if (scrollerItems) {
          const scrollerContent = Array.from(scrollerItems.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerItems.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <div className="scroller">
      <ul className="tag-list scroller-items">
        <li>
          <img src="/assets/logo/bitcoin.svg" alt="Bitcoin" />
        </li>
        <li>
          <img src="/assets/logo/ethereum.svg" alt="Ethereum" />
        </li>
        <li>
          <img src="/assets/logo/solana.svg" alt="Solana" />
        </li>
        <li>
          <img src="/assets/logo/litecoin.svg" alt="Litecoin" />
        </li>
        <li>
          <img src="/assets/logo/tron.svg" alt="Tron" />
        </li>
        <li>
          <img src="/assets/logo/xrp.svg" alt="XRP" />
        </li>
        <li>
          <img src="/assets/logo/polkadot.svg" alt="Polkadot" />
        </li>
        <li>
          <img src="/assets/logo/monero.svg" alt="Monero" />
        </li>
        <li>
          <img src="/assets/logo/aptos.svg" alt="Aptos" />
        </li>
      </ul>
    </div>
  );
};

export default Scroller;
