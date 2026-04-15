"use client";
import { useEffect, useRef } from "react";

const Scroller: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scroller = scrollerRef.current;
    scroller.setAttribute("data-animated", "true");

    const scrollerItems = scroller.querySelector(".scroller-items");
    if (!scrollerItems) return;

    const scrollerContent = Array.from(scrollerItems.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerItems.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div ref={scrollerRef} className="scroller">
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
