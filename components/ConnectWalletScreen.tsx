import React from "react";
import {
  ConnectWallet,
  magicLink,
  useConnect,
  useConnectionStatus,
} from "@thirdweb-dev/react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ConnectWalletScreen() {
  const connectWallet = useConnect();
  const connectionStatus = useConnectionStatus();
  const isLoading =
    connectionStatus === "connecting" || connectionStatus === "unknown";
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <p className="text-md text-muted-foreground">
          I already have my own wallet.
        </p>

        <ConnectWallet
          style={{
            marginTop: 12,
            width: "90%",
          }}
        />
      </div>

      <div className="flex items-center justify-center w-full mt-6 opacity-50 mb-6">
        <div className="w-1/4 h-px bg-muted-foreground opacity-25"></div>
        <p className="text-md text-muted-foreground mx-4">OR</p>
        <div className="w-1/4 h-px bg-muted-foreground opacity-25"></div>
      </div>

      <div className="w-full flex flex-col items-center">
        <p className="text-md text-muted-foreground">
          I&rsquo;m new to wallets, I need to create one.
        </p>

        <Button
          className="border border-solid border-white border-opacity-20 mt-6 bg-[#22232b] text-white p-4 rounded-lg flex flex-row items-center hover:bg-inherit"
          style={{
            marginTop: 12,
            height: 46,
            width: "90%",
          }}
          onClick={() =>
            connectWallet(
              magicLink({
                type: "auth",
                apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
                oauthOptions: {
                  providers: ["google"],
                },
              }),
              {
                oauthProvider: "google",
              }
            )
          }
          disabled={isLoading}
        >
          {isLoading ? (
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1s_linear_infinite]"
              role="status"
            />
          ) : (
            <>
              <Image
                src="/google.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />

              <span className="text-sm font-semibold">Sign in with Google</span>
            </>
          )}
        </Button>

        <ConnectWallet
          btnTitle="Create a web3 Wallet"
          style={{
            marginTop: 12,
            width: "90%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </>
  );
}
