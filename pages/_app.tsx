import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  bloctoWallet,
  coinbaseWallet,
  frameWallet,
  magicLink,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  smartWallet,
  trustWallet,
  walletConnect,
  zerionWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Toaster } from "../components/ui/toaster";

const smartWalletOptions = {
  factoryAddress: "0xf766DB9d6b0587B74637003767071C24063c5457",
  gasless: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet(), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(trustWallet(), smartWalletOptions),
        smartWallet(zerionWallet(), smartWalletOptions),
        smartWallet(bloctoWallet(), smartWalletOptions),
        smartWallet(frameWallet(), smartWalletOptions),
        smartWallet(rainbowWallet(), smartWalletOptions),
        smartWallet(phantomWallet(), smartWalletOptions),
        magicLink({
          apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
          oauthOptions: {
            providers: ["google"],
          },
          type: "auth",
          emailLogin: false,
          smsLogin: false,
        }),
      ]}
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
