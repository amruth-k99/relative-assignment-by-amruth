import Bitcoin from "../assets/svgs/bitcoin.svg";
import Ethereum from "../assets/svgs/ethereum.svg";
import Solana from "../assets/svgs/solana.svg";
import Shiba from "../assets/svgs/shiba.svg";
import Binance from "../assets/svgs/binance.svg";
import Activity from "../assets/svgs/activity.svg";

const DATA = [
  {
    id: 1,
    title: "Bitcoin (BTC)",
    price: "31812.8",
    percentage: 10,
    tvl: 60000,
    popularPairs: [Shiba, Solana, Ethereum],
    image: Bitcoin,
  },

  {
    id: 1,
    title: "Solana (SOL)",
    price: "32.83",
    percentage: -12.32,
    tvl: 60000,
    popularPairs: [Bitcoin, Ethereum, Binance],
    image: Solana,
  },

  {
    id: 1,
    title: "Ethereum (ETH)",
    price: "31812.8",
    percentage: -11.93,
    tvl: 60000,
    popularPairs: [Solana, Bitcoin, Shiba],
    image: Ethereum,
  },

  {
    id: 1,
    title: "Binance USD (BUSD)",
    price: "1.0",
    percentage: 0.26,
    tvl: 60000,
    popularPairs: [Solana, Ethereum, Bitcoin],
    image: Binance,
  },

  {
    id: 1,
    title: "Shiba Inu (SHIB)",
    price: "0.00000001948",
    percentage: -8.1,
    tvl: 60000,
    popularPairs: [Bitcoin, Ethereum, Binance],
    image: Shiba,
  },
];

export { DATA, Activity };
